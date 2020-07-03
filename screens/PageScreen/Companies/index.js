import React , { Component }               from 'react';
import Header                              from "../../../components/Header";
import { createStackNavigator, TabRouter } from "react-navigation";
import Category                            from "./category";
import NextCompanies                       from "./nextcompanies";
import HomeScreen                          from "../../HomeScreen";
import CompanyDetail                       from "./companydetail";

class CompaniesCategory extends Component {
    static navigationOptions = {
        header: null
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
        screen: Category
    },
    NextCompanies: {
        screen: NextCompanies
    },
    CompanyDetail: {
        screen: CompanyDetail
    }
}

const AppChildDrawerNavigator = createStackNavigator(Navs)

export default CompaniesCategory;
