import Battletag from "../../models/Battletag";
import { Avatar, Button, ButtonGroup, Card, Divider, ListItem, Text, } from "react-native-elements";
import React, { FC, } from "react";
import styles from "./BattletagList.styles";
import { View, } from "react-native";

interface IBattletagListProps {
    battletags: Battletag[]
    battletagAction: (battletag: Battletag) => void
    deleteAction?: () => void
}
const BattletagList: FC<IBattletagListProps> = ({ battletags, battletagAction, deleteAction, }) => {
	return (
		<Card containerStyle={{ padding: 0, }}>
			{battletags.map((b, i) => (
				<ListItem onPress={() => battletagAction(b)} key={i} bottomDivider>
					<Avatar source={{ uri: "https://via.placeholder.com/150", }} />
					<ListItem.Content>
						<ListItem.Title>{b.urlName}</ListItem.Title>
						<ListItem.Subtitle>{b.platform}</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
			))}
		</Card>
	);
};

export default BattletagList;
