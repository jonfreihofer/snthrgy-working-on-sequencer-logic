import * as React from "react";
import {DashboardContainer, LeftPanel} from "./styles";
import ProfileRow from "../../components/ProfileRow/index";
import PlayField from "./Playfield";
import Tracks from "../../components/Tracks/index";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <LeftPanel>
        <ProfileRow />
        <Tracks />
      </LeftPanel>
      <PlayField />
    </DashboardContainer>
  );
};

export default Dashboard;
