import styles from '@/app/ui/ticket.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faPlaneDeparture, faPlaneArrival, faAddressCard, faGlobe, faCircleExclamation, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className={styles.ticket}>
              <div className={styles.ticket_left}>
                  <div className={styles.ticket_header}>
                      <div className={styles.logo}>
                          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                      </div>
                      <div className={styles.title}>
                          <span>Air Lines</span>
                      </div>
                      <span>.............................................................</span>
                      <div className={styles.logo}>
                          <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
                      </div>
                  </div>
                  <div className={styles.ticket_body}>
                      <div className={styles.data}>
                          <div>
                              <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                              <label>PASSENGER NAME</label>
                              <p>Mr. John Doe</p>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
                              <label>FROM</label>
                              <p>New York, USA</p>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={faPlaneArrival}></FontAwesomeIcon>
                              <label>TO</label>
                              <p>Rome, spain</p>
                          </div>
                      </div>
                      <div className={styles.date}>
                          <p>
                              <label htmlFor="">DATE</label>
                              <span>11.03.07</span>
                          </p>
                          <p>
                              <label htmlFor="">TIME</label>
                              <span>21.25</span>
                          </p>
                          <div>
                              <div>
                                  <span>FLIGHT</span>
                                  <p>I124</p>
                              </div>
                              <div>
                                  <span>GATE</span>
                                  <p>D4</p>
                              </div>
                              <div>
                                  <span>SEAT</span>
                                  <p>31B</p>
                              </div>
                          </div>
                      </div>
                      <div className={styles.barcode}>
                          <p>ABCDEFGH</p>
                      </div>
                  </div>
                  <div className={styles.ticket_foot}>
                      <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
                      <span>IMPORTANT NOTE:</span>
                      <span>You should be at the boarding gate before 20:05</span>
                  </div>
              </div>
              <div className={styles.ticket_right}>
                  <div className={styles.ticket_header}>
                      <span>...</span>
                      <span>BOARDING PASS</span>
                      <span>...</span>
                  </div>
                  <div className={styles.ticket_body}>
                      <div>
                          <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                          <label htmlFor="">PASSENGER</label>
                          <p>Mr. John Doe</p>
                      </div>
                      <div>
                          <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
                          <label htmlFor="">FROM</label>
                          <p>New York, USA</p>
                      </div>
                      <div>
                          <FontAwesomeIcon icon={faPlaneArrival}></FontAwesomeIcon>
                          <label htmlFor="">TO</label>
                          <p>Rome, Spain</p>
                      </div>
                  </div>
                  <div className={styles.ticket_foot}>
                      <div className={styles.flight_code}>
                          <div>
                              <span>FLIGHT</span>
                              <span>I124</span>
                          </div>
                          <div>
                              <span>JFK</span>
                              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                              <span>ROM</span>
                          </div>
                      </div>
                      <div>
                          <div className={styles.logo}>
                              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                          </div>
                          <div className={styles.title}>
                              <span>Air Lines</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  );
}
