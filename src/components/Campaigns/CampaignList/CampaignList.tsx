import React from "react";
import { connect } from "react-redux";

import CampaignTable from "../CampaignTable/CampaignTable";

import * as S from "./CampaignList.style";
import Card from "../../Card/Card";
import { Text } from "../../Text/Text";

import TestTable from "../testTable/testTable";

import {
  GetCampaignList,
} from "../../../actions";


class CampaignList extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  public componentDidMount() {
    this.props.GetCampaignList(this.props.auth);
    console.log(this.props.campaignList)
  }

  public render() {
    const { match } = this.props;
    const { campaignList } = this.props;
    return (
      <div>
        <Card>
          <S.CardHeader>
            <Text fontFamily={"Poppins"} sizes={[20, 20, 20, 20, 20]}>
              Campaigns
            </Text>
          </S.CardHeader>
          <CampaignTable match={match} data={campaignList} />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  auth: state.authReducer,
  campaigns: state.campaignReducer.campaigns,
  campaignList: state.campaignListReducer.campaignList
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  GetCampaignList: (auth: any) => dispatch(GetCampaignList(auth))
});

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CampaignList);
