import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    img_avt: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    wrap: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollView: {
        marginVertical: 10,
    },
    touchOPT: {
        margin: 10
    },
    catetitle: {
        fontSize: 20,
        color: 'black',
    },
    touchOPTImg: {
        width: 280,
        height: 280,
        overflow: 'hidden',
        borderRadius: 20,
        marginRight: 20,
        marginTop: 20,
    },
    wrapImg: {
        position: 'absolute',
        zIndex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    textImg: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1,
        bottom: 20,
        left: 20
    },
    feeling: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20
    },
    advantures: {
        width: 30,
        height: 60,
    },
    titleAdv: {
        textTransform: 'uppercase',
        fontSize: 10,
        marginTop: 10
    }

})

export default styles