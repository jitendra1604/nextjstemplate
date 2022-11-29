import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import styles from "../../styles/components/Home.module.scss";

const Contempary = () => {

    
  return (
    <section className={styles.contempary_sec}>
        <div className={`container`}>
            <Tab.Container defaultActiveKey="accreda_sign">
            <Row>
                <Col md={7}>
                    <h2>Select from our contemporary and <span>cutting edge</span> programs</h2>
                    <div className={styles.contempary_tabs}>
                        <Nav>
                            <Nav.Item className={styles.nav_item}>
                                <Nav.Link eventKey="accreda_sign">Accreda Signature Program</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={styles.nav_item}>
                                <Nav.Link eventKey="accreda_booster">Accreda Booster Program</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>
                <Col md= {{ span: 4, offset: 1 }}>
                    <div className={styles.contempary_tab_content}>
                        <Tab.Content>
                            <Tab.Pane eventKey="accreda_sign">
                                <h6><span>Accreda</span> Signature program</h6>
                                <p>The Signature Accreda programs help aspiring professionals develop expertise in the professional area or discipline of their choice by providing a holistic learning experience to the learner </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="accreda_booster">
                            2
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Col>

            </Row>
            </Tab.Container>
        </div>
    </section>
  )
}

export default Contempary