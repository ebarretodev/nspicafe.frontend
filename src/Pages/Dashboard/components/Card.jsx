import { Typography } from "antd"
import { useMediaQuery } from "./../../../helpers/useMediaQuery"
const { Title } = Typography

const Card = (props) => {
    const isMobileScreen = useMediaQuery("(max-width: 767px)")
    return (
        <div
            style={{
                boxShadow: "0px 2px 12px 3px rgba(0, 0, 0, 0.32)",
                borderRadius: "5px",
                marginTop: "20px",
                marginBottom: "5px",
                marginRight: "10px",
                marginLeft: "10px",
                padding: "10px",
                textAlign: "center",
                
                width: isMobileScreen ? "40%" : "30%",
            }}
        >
            <Title
                level={4}
                style={{
                    fontSize: isMobileScreen ? 13 : 20,
                    marginBottom: isMobileScreen ? 5 : 5,
                }}
            >
                {props.title}
            </Title>
            <div
            >
                <Title
                style={{
                    fontSize: isMobileScreen ? 30 : 40,
                    marginBottom: isMobileScreen ? 5 : 5,
                }}>{props.children}</Title>
            </div>
        </div>
    )
}

export default Card
