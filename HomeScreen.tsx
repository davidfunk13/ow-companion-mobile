import React, { FC } from "react";
import { Button, View } from "react-native";

interface IHomeScreenProps {
    navigation: any
}

const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

export default HomeScreen
