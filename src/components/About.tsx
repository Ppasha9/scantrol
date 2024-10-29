import React from 'react';

import { Input } from '@material-tailwind/react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = () => {
  return (
    <section
      style={{
        backgroundColor: '#aa998d',
      }}
      className={`z-0 w-fit h-full -mt-60 py-1 pb-32`}
      id="about"
    >
      <div className={`container ml-60 w-3/4 mx-auto`}>
        <div className="text-white text-base text-md">
          Submit your application
        </div>

        <div className="w-full mt-5">
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div
                            style={{
                              backgroundColor: '#ffffff',
                              borderRadius: '30px',
                              color: '#aa998d',
                            }}
                            className="border px-4 py-4 mr-2 w-full"
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="ml-4">Name</div>
                                  </td>
                                  <td>
                                    <Input
                                      variant="static"
                                      placeholder="...your name"
                                      className="ml-2 mr-4"
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>

                        <td>
                          <div
                            style={{
                              backgroundColor: '#ffffff',
                              borderRadius: '30px',
                              color: '#aa998d',
                            }}
                            className="border px-4 py-4 ml-2 w-full"
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <EmailIcon></EmailIcon>
                                  </td>
                                  <td>
                                    <Input
                                      variant="static"
                                      placeholder="...your email"
                                      className="ml-2 mr-4"
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div
                            style={{
                              backgroundColor: '#ffffff',
                              borderRadius: '30px',
                              color: '#aa998d',
                            }}
                            className="border px-4 py-4 mr-2 w-full mt-4"
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <LocalPhoneIcon></LocalPhoneIcon>
                                  </td>
                                  <td>
                                    <Input
                                      variant="static"
                                      placeholder="...your phone number"
                                      className="ml-2 mr-4"
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>

                        <td style={{ verticalAlign: 'bottom' }}>
                          <div>
                            <a
                              href=""
                              className={`text-white text-base text-md w-full flex items-center justify-center mx-3 border rounded-full background-bg py-3`}
                            >
                              <div>Send an application</div>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>

                <td style={{ verticalAlign: 'top' }}>
                  <div className="ml-20 flex flex-wrap text-white text-base text-sm">
                    <LocalPhoneIcon></LocalPhoneIcon>
                    <div className="ml-2">+7 705 487 82 05</div>
                  </div>
                  <div className="ml-20 mt-5 flex flex-wrap text-white text-base text-sm">
                    <EmailIcon></EmailIcon>
                    <div className="ml-2">info@scantrol3d.com</div>
                  </div>
                  <div className="ml-20 mt-5 flex flex-wrap text-white text-base text-sm">
                    <LocationOnIcon></LocationOnIcon>
                    <div className="ml-2">
                      <table>
                        <tbody>
                          <tr>
                            <td>Kazakhstan, Almaty,</td>
                          </tr>
                          <tr>
                            <td>Bokeikhanova street, 214</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default About;
