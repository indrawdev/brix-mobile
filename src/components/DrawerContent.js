import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const DrawerContent = props => {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: 'row', marginTop: 15 }}>

						</View>
					</View>
					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name="home-outline"
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => { props.navigation.navigate('Home') }}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name="account-outline"
									color={color}
									size={size}
								/>
							)}
							label="Profile"
							onPress={() => { props.navigation.navigate('Profile') }}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name="bookmark-outline"
									color={color}
									size={size}
								/>
							)}
							label="Bookmarks"
							onPress={() => { props.navigation.navigate('BookmarkScreen') }}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name="settings-outline"
									color={color}
									size={size}
								/>
							)}
							label="Settings"
							onPress={() => { props.navigation.navigate('SettingsScreen') }}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name="account-check-outline"
									color={color}
									size={size}
								/>
							)}
							label="Support"
							onPress={() => { props.navigation.navigate('SupportScreen') }}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon
							name="exit-to-app"
							color={color}
							size={size}
						/>
					)}
					label="Sign Out"
					onPress={() => { console.log('Signout') }}
				/>
			</Drawer.Section>
		</View>
	)
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});

export default DrawerContent;