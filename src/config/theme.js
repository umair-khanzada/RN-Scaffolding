import THEME_CONFIG from './themeConfig';

export default {
	colors: {
		primary: THEME_CONFIG.PRIMARY_COLOR,
		secondary: THEME_CONFIG.SECONDARY_COLOR
	},

	Button: {
		containerStyle: [
			{
				position: 'relative'
			}
		],
		buttonStyle: [
			{
				height: 60,
				elevation: 2, // Set elevation 0 when used type outline button.
				borderRadius: 0,
				marginBottom: THEME_CONFIG.DEFAULT_M_B,
				alignItems: 'center',
				justifyContent: 'center'
				// borderWidth: 2,  // Set borderWidth when used type outline button.
			}
		],
		titleStyle: [
			{
				fontSize: THEME_CONFIG.PRIMARY_FONT_SIZE,
				fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY
			}
		],
		icon: {
			color: '#fff',
			size: 30
		},
		iconContainerStyle: [
			{
				position: 'absolute',
				left: 10
			}
		],
		loadingProps: {
			size: 35
		}
	},

	Input: {
		containerStyle: [
			{
				paddingHorizontal: 0,
				borderBottomWidth: 0
			}
		],
		inputContainerStyle: [
			{
				borderWidth: 2,
				borderBottomWidth: 2,
				borderColor: THEME_CONFIG.PRIMARY_COLOR,
				marginBottom: THEME_CONFIG.DEFAULT_M_B
			}
		],
		inputStyle: [
			{
				fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY,
				paddingHorizontal: 10,
				borderRadius: 0,
				fontSize: THEME_CONFIG.PRIMARY_FONT_SIZE
			}
		],
		errorStyle: [
			{
				marginHorizontal: 0,
				marginTop: -10,
				fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY
			}
		]
	},

	Icon: {
		color: THEME_CONFIG.PRIMARY_COLOR,
		size: THEME_CONFIG.ICON_SIZE,
		type: 'feather'
	},

	CheckBox: {
		iconType: 'antdesign',
		checkedIcon: 'checksquare',
		uncheckedIcon: 'closesquare',
		checkedColor: THEME_CONFIG.PRIMARY_COLOR,
		titleProps: {
			style: [
				{
					fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY,
					paddingLeft: 5
				}
			]
		},
		containerStyle: [
			{
				paddingHorizontal: 0,
				paddingVertical: 0,
				borderWidth: 0,
				backgroundColor: 'transparent',
				marginVertical: 0,
				marginLeft: 0,
				marginRight: 0
			}
		]
	},

	Text: {
		style: [
			{
				fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY,
				fontSize: THEME_CONFIG.PRIMARY_FONT_SIZE
			}
		],
		h4Style: [
			{
				fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY,
				fontSize: 20,
				fontWeight: 'normal'
			}
		]
	},

	ListItem: {
		containerStyle: [
			{
				// marginHorizontal: 15,
				marginVertical: 2,
				elevation: 2
			}
		],
		contentContainerStyle: [
			{
				paddingVertical: 10
			}
		],
		titleStyle: [
			{
				fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY
			}
		],
		subtitleStyle: [
			{
				fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY,
				fontSize: THEME_CONFIG.PRIMARY_FONT_SIZE - 4
			}
		],
		leftIcon: {
			color: THEME_CONFIG.PRIMARY_COLOR
		},
		rightIcon: {
			color: THEME_CONFIG.PRIMARY_COLOR
		}
	}
};
