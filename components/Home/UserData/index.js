import {
    Card,
    CardActions,
    CardContent,
    Collapse,
    IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import styles from "../../../styles/Home/Home.module.scss";
import UserAbout from "./About";
import UserEducation from "./Education";
import UserName from "./Name";
import UserWork from "./Work";

const UserData = ({ details }) => {
    const [expanded, setExpanded] = useState("");

    const handleExpandClick = (field) => {
        setExpanded(expanded === "" || expanded !== field ? field : "");
    };

    return (
        <Card className={styles.UserDataContainer} variant="outlined">
            <CardContent>
                <UserName
                    name={details.name}
                    currentPosition={details.current_position}
                />

                <CardActions
                    disableSpacing
                    onClick={() => handleExpandClick("about")}
                >
                    <div className={styles.title}>About</div>
                    <IconButton
                        aria-expanded={expanded === "about"}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={expanded === "about"}
                    timeout="auto"
                    unmountOnExit
                >
                    <UserAbout about={details.about} />
                </Collapse>

                <CardActions disableSpacing>
                    <div className={styles.title}>Work</div>
                    <IconButton
                        onClick={() => handleExpandClick("work")}
                        aria-expanded={expanded === "work"}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded === "work"} timeout="auto" unmountOnExit>
                    <UserWork work={details.job} />
                </Collapse>

                <CardActions disableSpacing>
                    <div className={styles.title}>Education</div>
                    <IconButton
                        onClick={() => handleExpandClick("education")}
                        aria-expanded={expanded === "education"}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={expanded === "education"}
                    timeout="auto"
                    unmountOnExit
                >
                    <UserEducation education={details.education} />
                </Collapse>
            </CardContent>
        </Card>
    );
};

export default UserData;
