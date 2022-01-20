import React from 'react'
import { useForm } from 'react-hook-form'


function Contactus() {

    const { register, handleSubmit, formState: { errors } } = useForm()




    //form submission
    const onFormSubmit = (userObj) => {
        console.log(userObj);
    }


    return (
        <div>
            <p className="display-3 text-center text-info">Contact form</p>
            <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        id="username"
                        className="form-control"
                        {...register("username", { required: true, minLength: 4, maxLength: 6 })} />
                    {/* validation error msg for required of username */}
                    {errors.username?.type === 'required' && <p className='text-danger'>* Username is required</p>}
                    {/* validation error msg for minLength of username */}
                    {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                    {/* validation error msg for maxLength of username */}
                    {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 6</p>}

                </div>
                {/* email */}
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" className="form-control" {...register("email", { required: true })} />
                    {/* validation error msg for required of email */}
                    {errors.email?.type === 'required' && <p className='text-danger'>* Email is required</p>}
                </div>
                {/* dob */}
                <div className="mb-3">
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" name="" id="dob" className="form-control" {...register("dob", { required: true })} />
                    {/* validation error msg for required of dob */}
                    {errors.dob?.type === 'required' && <p className='text-danger'>* Date of birth is required</p>}
                </div>
                {/* skills */}
                <div className="mb-3">
                    <label>Select skills</label>
                    {/* checkbox 1 */}
                    <div className="form-check">
                        <input type="checkbox" id="js" className="form-check-input" {...register("javascript")} />
                        <label htmlFor="js" className="form-check-label">JavaScript</label>
                    </div>
                    {/* checkbox 2 */}
                    <div className="form-check">
                        <input type="checkbox" id="react" className="form-check-input" {...register("react")} />
                        <label htmlFor="react" className="form-check-label">React</label>
                    </div>
                    {/* checkbox 3 */}
                    <div className="form-check">
                        <input type="checkbox" id="angular" className="form-check-input" {...register("angular")} />
                        <label htmlFor="angular" className="form-check-label">Angular</label>
                    </div>

                </div>
                {/* feedback */}
                <div className="mb-3">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea name="" id="" rows="5" className="form-control" {...register("feedback", { required: true })}></textarea>
                    {/* validation error msg for required of feedback */}
                    {errors.feedback?.type === 'required' && <p className='text-danger'>* Feedback is required</p>}
                </div>
                {/* submit button */}
                <button type="submit" className="btn btn-success d-block mx-auto">Send</button>
            </form>
        </div>
    )
}

export default Contactus
