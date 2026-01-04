import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { PetViewModel } from './modules/pet/presentation/viewmodel/PetViewModel';

function Screen1() {
    const { getPetData, pets } = PetViewModel();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{marginTop: 100}}>Welcome to React Native!</Text>
                <Button title="Get Pet Data" onPress={getPetData} />
                <FlatList
                    data={pets}
                    renderItem={({ item }) => {
                        return <Text>{item.name}</Text>;
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Screen1;
