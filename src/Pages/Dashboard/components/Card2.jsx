import { Typography } from "antd"
import { useMediaQuery } from "../../../helpers/useMediaQuery"
const { Title } = Typography

const Card = (props) => {
    const isMobileScreen = useMediaQuery("(max-width: 767px)")
    return (
        <div
            style={{
                boxShadow: "0px 2px 12px 3px rgba(0, 0, 0, 0.32)",
                borderRadius: "5px",
                marginTop: "10px",
                marginBottom: "5px",
                marginRight: "10px",
                marginLeft: "10px",
                padding: "10px",
                textAlign: "left",
                width: '100%',
                height: props.height
            }}
        >
            <Title
                level={4}
                style={{
                    fontSize: isMobileScreen ? 13 : 20,
                    marginBottom: isMobileScreen ? 5 : 5,
                    textAlign: "center",
                }}
            >
                {props.title}
            </Title>
            <div
                style={{
                    height: '90%',
                    overflowY: props.scroll ? "scroll" : "hidden",
                }}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Card
