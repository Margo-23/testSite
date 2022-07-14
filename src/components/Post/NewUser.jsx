import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function NewUser({positions, setPositions, setUsers}) {
  const [position, setPosition] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [token, setToken] = React.useState('');
  const [formIsValide, setFormIsValide] = React.useState(false);
  const [nameHasError, setNameHasError] = React.useState(false);
  const [emailHasError, setEmailHasError] = React.useState(false);
  const [phoneHasError, setPhoneHasError] = React.useState(false);

React.useEffect(()=>{
  axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
  .then(res=>{setToken(res.data.token)});
},[])

  const changePosition = (e)=>{
    if(e.target.checked){
      setPosition({
        name: e.target.value,
        id: e.target.id
      });
    }    
  }

  const changePhoto = (e)=>{
    setPhoto(e.currentTarget.files[0]);
  }

  const addNewUser = (values)=>{
    let user= {
      name: values.name,
      email: values.email,
      phone: values.phone,
      position: position.name,
      position_id: position.id,
      photo: photo
    };
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('position', user.position);
    formData.append('position_id', user.position_id);
    formData.append('photo', user.photo);
    axios.post(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      formData,
      {
          headers: {
              'Token': token
          },
      }
  )
      .then(res => {
          console.log(`Success` + res.data);
          axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6`)
          .then(response=>{
            setUsers(response.data.users);
        });
      })
      .catch(err => {
          console.log(err);
      })
  }


  React.useEffect(()=>{
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    .then(response=>{setPositions(response.data.positions);      
    })  


  },[])



  return (
    <div className='postBlock'>
      <div className='container'>      
      <h2 className='postBlock__title title'>Working with POST request</h2>
      <Formik
       initialValues={{name: '',  email: '', phone: ''}}
       validate={(values) => {
        const errors = {};
         if (!values.name) {
          errors.name = 'Required';
          setNameHasError(true);
        }else if (
          !/^.{2,60}$/i.test(values.name)
          ) {
          errors.name = 'Invalid name';
          setNameHasError(true);
        }else{
          setNameHasError(false);
        };
         if (!values.email) {
           errors.email = 'Required';
           setEmailHasError(true);
         } else if (
           !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
           setEmailHasError(true);
         }else{
          setEmailHasError(false);
         };
         if (!values.phone) {
          errors.phone = 'Required';
          setPhoneHasError(true);
        } else if (
          !/^[\+]{0,1}380([0-9]{9})$/i.test(values.phone)
        ) {
          errors.phone = 'Invalid phone';
          setPhoneHasError(true);
        }else{
          setPhoneHasError(false);
        }
        if(!errors.name && !errors.email && !errors.phone){
          setFormIsValide(true)
        }
        return errors;
       }
      }
      
       onSubmit={(values)=>{addNewUser(values) }}
     >
       {({ isSubmitting }) => (
         <Form>
          <div className={'postBlock__box' }>
          <Field type="text" name="name" className={nameHasError?'postBlock__input error':'postBlock__input '} placeholder='Your name'/>
           <ErrorMessage name="name" component="div" className='postBlock__error'/>
          </div>
          <div className='postBlock__box'>
           <Field type="email" name="email" className={emailHasError?'postBlock__input error':'postBlock__input '} placeholder='Email'/>
           <ErrorMessage name="email" component="div" className='postBlock__error'/>
           </div>
           <div className='postBlock__box'>
           <Field type="phone" name="phone" className={phoneHasError?'postBlock__input postBlock__input--phone error':'postBlock__input postBlock__input--phone'} placeholder='Phone'/>
           <div className='postBlock__helper'>+38 (XXX) XXX - XX - XX</div>
           <ErrorMessage name="phone" component="div" className='postBlock__error'/>
           </div>
           <div className='postBlock__radio'>
            <div className='postBlock__radio-title'>Select your position</div>
              {positions && positions.map(postionItem=>(
            <label className={position.id==postionItem.id? 'postBlock__radio-label postBlock__radio-label--active': 'postBlock__radio-label'} key={postionItem.id} >
            <input className='postBlock__radio-input' type="radio" name='positions' value={postionItem.name} id={postionItem.id} onChange={changePosition}></input>
            {postionItem.name}
            </label>
              ))}
            </div>
            <div className='postBlock__file'> 
            <label className='postBlock__file-label'>
            <input className='postBlock__file-input' required id="file" name="file" type="file" onChange={changePhoto} accept="image/jpg, image/jpeg"/>
            <div className='postBlock__file-bnt'>Upload</div>{photo? photo.name:'Upload your photo'}            
            </label>
            
            </div>
           <button className={formIsValide? 'postBlock__btn postBlock__btn--valid button':'postBlock__btn button'} type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
     </div>
    </div>
  )
}

export default NewUser;