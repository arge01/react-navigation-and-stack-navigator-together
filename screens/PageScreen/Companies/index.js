import React , { Component }               from 'react';
import Header                              from "../../../components/Header";
import { createStackNavigator, TabRouter } from "react-navigation";
import Category                            from "./category";
import NextCompanies                       from "./nextcompanies";
import CompanyDetail                       from "./companydetail";

class CompaniesCategory extends Component {
    componentDidMount() {
		setTimeout(() => {
			this.props.navigation.closeDrawer()
		}, 95)
	}
    render() {
        return (
            <>
                <Header navigate={this.props.navigation} goBackButton={this.props.navigation.goBack} />
                <AppChildDrawerNavigator/>
            </>
        );
    }
}

const Navs = {
    Category: {
        screen: Category,
        navigationOptions: {
            header: null
        },
    },
    NextCompanies: {
        screen: NextCompanies,
        navigationOptions: {
            header: null
        },
    },
    CompanyDetail: {
        screen: CompanyDetail,
        navigationOptions: {
            header: null
        },
    }
}

const AppChildDrawerNavigator = createStackNavigator(Navs)

export default CompaniesCategory;
