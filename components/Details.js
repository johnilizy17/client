import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export default function Forminformation() {

    const businessProblem = ["Improve your reach and  visibility", "Build/Improve your website", "Design/improve an application", "Market your product and services", "Start a project/Business ffrom the beginning ( Business Consulation)", "Improve generated revenue"]

    const amount = ["100$ - 500$", "501$ - 1000$", "1000$ - 10,000$", "10,000$ - 100,000$", ">100,000$"]

    const time = ["Now", "This week", "Next week", "Month’s End", "Next month", "Not ready yet"]

    const social = ["A direct referral", "Whatsapp", "Instagram", "Twitter", "Facebook", "Linkedin", "Google Search"]

    const answers = ["Yes, definitely", "No, not yet"]



    return (
        <div style={{ width: 646,  }}>
            <Formik
                initialValues={{ email: "", password: "", first: "", last: "", role: "", confirm: "", checkbox: "" }}
                validationSchema={Yup.object({
                    first: Yup.string().required("Required"),
                    last: Yup.string().required("Required"),
                    email: Yup.string().email('invalid email address').required('Required'),
                })}

                onSubmit={(values, { setSubmitting }) => {

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div style={{
                                        fontFamily: "Open Sans",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#1E1E24",
                                        marginBottom: 12
                                    }}>Your Name </div>
                                    <Field style={{ width: 303, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="first" name="first" placeholder="Your Name" />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="first" />
                                    </div>
                                </div>
                                <div>
                                    <div style={{
                                        fontFamily: "Open Sans",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#1E1E24",
                                        marginBottom: 12
                                    }}>Your Phone Number </div>
                                    <Field style={{ width: 303, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="first" name="first" placeholder="Your Phone Number" />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="first" />
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: 40 }}>
                                <div style={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>Business Email </div>
                                <Field style={{ width: 646, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="email" name="email" placeholder="Business Email" />
                                <div style={{ color: "red" }}>
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <div style={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>Brand Name</div>
                                <Field style={{ width: 646, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="brand" placeholder="Brand Name" />
                                <div style={{ color: "red" }}>
                                    <ErrorMessage name="brand" />
                                </div>
                                <div style={{ marginTop: 40 }}>
                                    <div style={{
                                        fontFamily: "Open Sans",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#1E1E24",
                                        marginBottom: 12
                                    }}>Brand Website</div>
                                    <Field style={{ width: 646, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="website" placeholder="Brand Website" />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="website" />
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <div style={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>Brand Description</div>
                                <Field component="textarea" style={{ width: 646, height: 237, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="Description" placeholder="Brand Description" />
                                <div style={{ color: "red" }}>
                                    <ErrorMessage name="Description" />
                                </div>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <div style={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>Industry of operation</div>
                                <Field style={{ width: 646, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="industry" placeholder="What industry(s) would you say you operate in" />
                                <div style={{ color: "red" }}>
                                    <ErrorMessage name="industry" />
                                </div>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <div style={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>Geographical Location</div>
                                <Field style={{ width: 646, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="location" placeholder="Precise location would help us better" />
                                <div style={{ color: "red" }}>
                                    <ErrorMessage name="location" />
                                </div>
                                <div style={{ marginTop: 40 }}>
                                    <div style={{
                                        fontFamily: "Open Sans",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#1E1E24",
                                        marginBottom: 12
                                    }}>Target Client</div>
                                    <Field component="textarea" style={{ width: 646, height: 237, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="Description" placeholder="Describe your target client ( occupation, age...)" />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="Description" />
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div style={{
                                marginTop: 40,
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: 14,
                                lineHeight: "150%",
                                color: "#1E1E24"
                            }}>
                                What problem are you looking to solve for your business ?
                            </div>
                            <div style={{ marginTop: 20, marginBottom: 45.5 }}>
                                {businessProblem.map((data) => (<div key={data} className="flex items-center" style={{ marginBottom: 20 }}>
                                    <Field type="checkbox" name={data} style={{
                                        width: 24,
                                        height: 24,
                                        left: 4,
                                        top: 4,
                                        border: "1PX solid #9C9C9C",
                                        boxSizing: "border-box",
                                        borderRadius: 6,
                                    }}
                                    /> <span style={{
                                        fontFamily: "Libre Franklin",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#676767",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        margin: " 0px 10px",
                                    }}>{data}</span>
                                </div>))}
                            </div>
                            <div>
                                <div className={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>
                                    Or is it a specific service need? Please describe
                                </div>
                                <Field component="textarea" style={{ width: 646, height: 237, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="client" placeholder="Description" />
                            </div>
                            <div style={{
                                marginTop: 40,
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: 14,
                                lineHeight: "150%",
                                color: "#1E1E24"
                            }}>
                                What’s your budget for this project ?
                            </div>
                            <div style={{ marginTop: 20, marginBottom: 45.5 }}>
                                {amount.map((data) => (<div key={data} className="flex items-center" style={{ marginBottom: 20 }}>
                                    <Field type="radio" name="picked" value={data} style={{
                                        width: 24,
                                        height: 24,
                                        left: 4,
                                        top: 4,
                                        border: "1PX solid #9C9C9C",
                                        boxSizing: "border-box",
                                        borderRadius: 6,
                                    }}
                                    /> <span style={{
                                        fontFamily: "Libre Franklin",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#676767",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        margin: " 0px 10px",
                                    }}>{data}</span>
                                </div>))}
                            </div>
                            <div style={{
                                marginTop: 40,
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: 14,
                                lineHeight: "150%",
                                color: "#1E1E24"
                            }}>
                                When are you ready to make commitment, commence and execute this project?
                            </div>
                            <div style={{ marginTop: 20, marginBottom: 45.5 }}>
                                {time.map((data) => (<div key={data} className="flex items-center" style={{ marginBottom: 20 }}>
                                    <Field type="radio" name="picked" value={data} style={{
                                        width: 24,
                                        height: 24,
                                        left: 4,
                                        top: 4,
                                        border: "1PX solid #9C9C9C",
                                        boxSizing: "border-box",
                                        borderRadius: 6,
                                    }}
                                    /> <span style={{
                                        fontFamily: "Libre Franklin",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#676767",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        margin: " 0px 10px",
                                    }}>{data}</span>
                                </div>))}
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <div style={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>Intened Deadline</div>
                                <Field style={{ width: 646, border: "0.5px solid #E3E3E3", padding: "12px 8px", boxSizing: "border-box", borderRadius: 4, }} type="text" name="Deadline" placeholder="Deadline" />
                                <div style={{ color: "red" }}>
                                    <ErrorMessage name="Deadline" />
                                </div>
                            </div>
                            <div style={{
                                marginTop: 40,
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: 14,
                                lineHeight: "150%",
                                color: "#1E1E24"
                            }}>
                                How did your hear of Cyclebreeze?
                            </div>
                            <div style={{ marginTop: 20, marginBottom: 45.5 }}>
                                {social.map((data) => (<div key={data} className="flex items-center" style={{ marginBottom: 20 }}>
                                    <Field type="radio" name="picked" value={data}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            left: 4,
                                            top: 4,
                                            border: "1PX solid #9C9C9C",
                                            boxSizing: "border-box",
                                            borderRadius: 6,
                                        }}
                                    /> <span style={{
                                        fontFamily: "Libre Franklin",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#676767",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        margin: " 0px 10px",
                                    }}>{data}</span>
                                </div>))}
                            </div>
                            <div style={{
                                marginTop: 40,
                                fontFamily: "Open Sans",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: 14,
                                lineHeight: "150%",
                                color: "#1E1E24"
                            }}>
                                Would you be willing to schedule a call with us ?
                            </div>
                            <div style={{ marginTop: 20, marginBottom: 45.5 }}>
                                {answers.map((data) => (<div key={data} className="flex items-center" style={{ marginBottom: 20 }}>
                                    <Field type="radio" name="picked" value={data}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            left: 4,
                                            top: 4,
                                            border: "1PX solid #9C9C9C",
                                            boxSizing: "border-box",
                                            borderRadius: 6,
                                        }}
                                    /> <span style={{
                                        fontFamily: "Libre Franklin",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#676767",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        margin: " 0px 10px",
                                    }}>{data}</span>
                                </div>))}
                            </div>
                            <div>
                                <div style={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    lineHeight: "150%",
                                    color: "#1E1E24",
                                    marginBottom: 12
                                }}>Do you have something you’d like to show us ?</div>
                                <div className="flex items-center" style={{ marginBottom: 60 }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ marginRight: 14 }} fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.37 12.35L12.15 14.57C11.61 15.11 10.91 15.37 10.21 15.37C9.51 15.37 8.8 15.1 8.27 14.57C7.75 14.05 7.46 13.36 7.46 12.63C7.46 11.9 7.75 11.2 8.27 10.69L9.68 9.28C9.97 8.99 10.45 8.99 10.74 9.28C11.03 9.57 11.03 10.05 10.74 10.34L9.33 11.75C9.09 11.99 8.96 12.3 8.96 12.63C8.96 12.96 9.09 13.28 9.33 13.51C9.82 14 10.61 14 11.1 13.51L13.32 11.29C14.59 10.02 14.59 7.96 13.32 6.69C12.05 5.42 9.99 5.42 8.72 6.69L6.3 9.11C5.79 9.62 5.51 10.29 5.51 11C5.51 11.71 5.79 12.39 6.3 12.89C6.59 13.18 6.59 13.66 6.3 13.95C6.01 14.24 5.53 14.24 5.24 13.95C4.44 13.18 4 12.13 4 11.01C4 9.89 4.43 8.84 5.22 8.05L7.64 5.63C9.49 3.78 12.51 3.78 14.36 5.63C16.22 7.48 16.22 10.5 14.37 12.35Z" fill="#3D3D3D" />
                                    </svg>
                                    <div style={{
                                        fontFamily: "Open Sans",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: 14,
                                        lineHeight: "150%",
                                        color: "#676767"
                                    }}>
                                        Attach file
                                   </div>
                                </div>
                            </div>
                            <button style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "16px 32px",
                                width: 111,
                                height: 53,
                                background: "linear-gradient(270.4deg, #6FC446 -4.6%, #C3E6B2 100%)",
                                boxShadow: "9px 15px 45px rgba(120, 255, 214, 0.06)",
                                borderRadius: 32
                            }}>
                                Submit
                            </button>
                        </form>

                    )}
            </Formik>
        </div>
    )
}