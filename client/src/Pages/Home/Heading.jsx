const Heading = ({heading1}) => {

    const styles = {
        fontSize: "32px",
        fontWeight: "500",
        textAlign: "left",
        width: "88%",
        margin: "auto",
        marginTop: "30px",
        marginBottom: "20px"
    }

    return (
        <div style={styles}>{heading1}</div>
    )
}

export default Heading;