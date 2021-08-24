import { ImageProps, } from "react-native";
import React from "react";
import { BackIcon, MoreVerticalIcon, } from "../assets/icons";
import {
	OverflowMenu,
	StyleType,
	TopNavigation,
	TopNavigationAction,
	TopNavigationActionElement,
	TopNavigationProps,
} from "@ui-kitten/components";

export interface ToolbarProps extends TopNavigationProps {
  menu?: () => React.ReactElement;
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  onBackPress?: () => void;
}

export const Toolbar = (props: ToolbarProps): TopNavigationActionElement => {

	const { menu, backIcon, menuIcon, onBackPress, ...topNavigationProps } = props;

	const [ menuVisible, setMenuVisible, ] = React.useState(false);

	const onMenuSelect = (
		// index: number
	) => {
		setMenuVisible(false);
	};

	const onMenuActionPress = () => {
		setMenuVisible(!menuVisible);
	};

	const renderMenuAnchorAction = (): TopNavigationActionElement => (
		<TopNavigationAction
			icon={props.menuIcon || MoreVerticalIcon as any}
			onPress={onMenuActionPress}
		/>
	);

	const renderMenuAction = (): TopNavigationActionElement => (
		<OverflowMenu
			visible={menuVisible}
			anchor={renderMenuAnchorAction}
			placement={"bottom end"}
			onSelect={onMenuSelect}
			onBackdropPress={onMenuActionPress}>
			{menu && menu()}
		</OverflowMenu>
	);

	const renderBackAction = (): TopNavigationActionElement => (
		<TopNavigationAction
			icon={props.backIcon || BackIcon as any}
			onPress={onBackPress}
		/>
	);

	return (
		<TopNavigation
			{...topNavigationProps}
			alignment={"center"}
			accessoryLeft={onBackPress && renderBackAction}
			accessoryRight={menu && menu() && renderMenuAction}
		/>
	);
};
