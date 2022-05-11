import React, { useState } from "react";

const Contact = () => {

    const [data, setdata] = useState({
        name:"",
        phone:"",
        email:"",
        message:"",
    })

    const update = (event) => {
        const {name, value} = event.target;
        setdata((preval) => {
                return {
                    ...preval,
                    [name] : value
                }
            }
        )
    }
    
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${data.name}
Phone Number: ${data.phone}
Email: ${data.email}
Message: ${data.message}`)
        setdata(
            data.name="",
            data.phone="",
            data.email="",
            data.message="",
        )
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" name="name" value={data.name} onChange={update} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" name="phone" value={data.phone} onChange={update} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={update} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea name="message" value={data.message} onChange={update} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;