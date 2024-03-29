import {StatusBar} from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

export default function App() {
    const [loaded, error] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!loaded || error) {
        return <></>;
    }

    return (
        <ImageBackground
            style={styles.container}
            source={require('./assets/images/home-page-background.png')}
            resizeMode='cover'>
            <Text style={styles.screenTitle}>
                <Text style={styles.boldTitlePart}>Virtual </Text>
                Gallery
            </Text>
            <View style={styles.imagesContainer}>
                <View style={styles.topContainer}>
                    <Image
                        style={styles.smallImg}
                        source={require('./assets/images/home-page-digital-art1.png')}
                    />
                    <Image
                        style={styles.smallImg}
                        source={require('./assets/images/home-page-digital-art2.png')}
                    />
                </View>
                <Image
                    style={styles.bigImg}
                    source={require('./assets/images/home-page-digital-art3.png')}
                />
            </View>
            <Text style={styles.introText}>Become an artist or a collector</Text>
            <TouchableOpacity>
                <LinearGradient
                    colors={['#B24E9D', '#7E3BA1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.logInBtn}
                >
                    <Text style={styles.logInBtnText}>Log In</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
                <LinearGradient
                    colors={['#7E3BA1', '#B24E9D']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.logInBtn}
                >
                    <Text style={styles.logInBtnText}>Create account</Text>
                </LinearGradient>
            </TouchableOpacity>
            <StatusBar style="auto"/>
</ImageBackground>
)
    ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenTitle: {
        marginTop: 40,
        fontSize: 36,
        fontFamily: 'Poppins_500Medium',
        color: '#fff',
        marginBottom: 25,
    },
    boldedTitlePart: {
        fontSize: 36,
        fontFamily: 'Poppins_700Bold',
    },
    imagesContainer: {
        flexDirection: 'column',
        width: '100%',
        maxWidth: 500,
    },
    topContainer: {
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    smallImg: {
        width: '48%',
        borderRadius: 7,
    },
    bigImg: {
        width: '96%',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 15,
    },
    introText: {
        marginTop: 26,
        fontSize: 20,
        fontFamily: 'Poppins_500Medium',
        color: '#fff',
    },
    logInBtn: {
        width: 200,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.54,
        shadowRadius: 20,
        elevation: 20, // This is needed for Android to display shadows.
        alignItems: 'center', // Add aligning and justifying items to center
        justifyContent: 'center',
        padding: 10, // Add padding to make the touchable area larger
        margin: 10,
    },
    logInBtnText: {
        fontSize: 20,
        backgroundColor: 'transparent',
        color: '#fff',
    },
    boldTitlePart: {
        fontSize: 36,
        fontFamily: 'Poppins_600SemiBold',
    },
});
