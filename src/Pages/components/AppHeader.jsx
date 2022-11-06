import React, { useState } from "react"
import { Button, Drawer, Typography } from "antd"
import { CgEnter, CgMenu, CgSmileNone } from "react-icons/cg"
import { useNavigate, Link } from "react-router-dom"

const { Title } = Typography

function AppHeader() {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }

    const handleLogin = () => {
        navigate("/admin")
    }

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="mobileHidden">
                    <div className="menu">
                        <Link style={{ marginLeft: "15px" }} to="/">
                            Home
                        </Link>
                        <Link style={{ marginLeft: "15px" }} to="/dashboard">
                            Dashboard
                        </Link>
                        {/* <Button
                            type="primary"
                            shape="round"
                            className="bt-login"
                            onClick={handleLogin}
                        >
                            Login
                        </Button> */}
                    </div>
                </div>
                <div className="mobileVisible">
                    <Title level={1} style={{color: 'white', fontSize: 28 }}>
                        Mauá NSPI - Café
                    </Title>
                    <Button
                        type="primary"
                        onClick={showDrawer}
                        style={{
                            backgroundColor: "#8b8b8b",
                            display: "flex",
                            border: "none",
                        }}
                    >
                        <CgMenu />
                    </Button>
                    <Drawer
                        title="Menu"
                        placement="right"
                        onClose={onClose}
                        visible={visible}
                        width={200}
                    >
                        <div className="menu-drawer">
                            <Link
                                style={{ color: "#8b8b8b", marginBottom: "30px", fontSize: "20px" }}
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                style={{ color: "#8b8b8b", marginBottom: "30px", fontSize: "20px" }}
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                            {/* <Button
                                type="primary"
                                shape="round"
                                className="bt-login"
                                onClick={handleLogin}
                            >
                                Login
                            </Button> */}
                        </div>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
