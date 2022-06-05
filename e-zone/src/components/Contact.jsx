import React from "react";


const Contact = () => {
  return (
    <div>
      <section className="container mt-5">
        <div className="row">
          <div className="col-sm-12 mb-4 col-md-5">
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="bg-primary text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope"></i> Write to us:
                  </h3>
                  <p className="m-0">
                    We wll write rarely, but only the best content.
                  </p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                    <input
                      value=""
                      type="text"
                      name="data[name]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      value=""
                      name="data[email]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      name="data[subject]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="text" className="form-control" name="mesg" />
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    name="submit"
                    value="submit"
                    className="btn btn-primary btn-block rounded-0 py-2 px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-7">
          <img src="/assets/contact-bg.svg" className="card-img" alt="Background" />
         <div class="mb-4">
           
         </div>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
