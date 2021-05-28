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
import About from "./About";
import Education from "./Education";
import Family from "./Family";
import Lifestyle from "./Lifestyle";
import MyLikes from "./MyLikes";
import Name from "./Name";
import Work from "./Work";

const UserData = ({ details }) => {
    const [expanded, setExpanded] = useState("");

    const handleExpandClick = (field) => {
        setExpanded(expanded === "" || expanded !== field ? field : "");
    };

    return (
        <Card className={styles.UserDataContainer} variant="outlined">
            <CardContent>
                <Name
                    name={details.name}
                    currentPosition={details.current_position}
                />

                <CardActions
                    disableSpacing
                    onClick={() => handleExpandClick("about")}
                    className={styles.subHeader}
                >
                    <div className={styles.title}>About Me</div>
                    <IconButton
                        aria-expanded={expanded === "about"}
                        aria-label="show more"
                        className={
                            expanded === "about"
                                ? styles.expandedIcon
                                : styles.nonExpandedIcon
                        }
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={expanded === "about"}
                    timeout="auto"
                    unmountOnExit
                >
                    <About about={details.about} />
                </Collapse>

                <CardActions
                    disableSpacing
                    onClick={() => handleExpandClick("work")}
                    className={styles.subHeader}
                >
                    <div className={styles.title}>Career</div>
                    <IconButton
                        aria-expanded={expanded === "work"}
                        aria-label="show more"
                        className={
                            expanded === "work"
                                ? styles.expandedIcon
                                : styles.nonExpandedIcon
                        }
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded === "work"} timeout="auto" unmountOnExit>
                    <Work work={details.job} />
                </Collapse>

                <CardActions
                    disableSpacing
                    onClick={() => handleExpandClick("education")}
                    className={styles.subHeader}
                >
                    <div className={styles.title}>Education</div>
                    <IconButton
                        aria-expanded={expanded === "education"}
                        aria-label="show more"
                        className={
                            expanded === "education"
                                ? styles.expandedIcon
                                : styles.nonExpandedIcon
                        }
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={expanded === "education"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Education education={details.education} />
                </Collapse>

                <CardActions
                    disableSpacing
                    onClick={() => handleExpandClick("family")}
                    className={styles.subHeader}
                >
                    <div className={styles.title}>Family Details</div>
                    <IconButton
                        aria-expanded={expanded === "family"}
                        aria-label="show more"
                        className={
                            expanded === "family"
                                ? styles.expandedIcon
                                : styles.nonExpandedIcon
                        }
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={expanded === "family"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Family family={details.family} />
                </Collapse>

                <CardActions
                    disableSpacing
                    onClick={() => handleExpandClick("lifestyle")}
                    className={styles.subHeader}
                >
                    <div className={styles.title}>Lifestyle</div>
                    <IconButton
                        aria-expanded={expanded === "lifestyle"}
                        aria-label="show more"
                        className={
                            expanded === "lifestyle"
                                ? styles.expandedIcon
                                : styles.nonExpandedIcon
                        }
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={expanded === "lifestyle"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Lifestyle lifestyle={details.lifestyle} />
                </Collapse>

                <CardActions
                    disableSpacing
                    onClick={() => handleExpandClick("myLikes")}
                    className={styles.subHeader}
                >
                    <div className={styles.title}>My Likes</div>
                    <IconButton
                        aria-expanded={expanded === "myLikes"}
                        aria-label="show more"
                        className={
                            expanded === "myLikes"
                                ? styles.expandedIcon
                                : styles.nonExpandedIcon
                        }
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={expanded === "myLikes"}
                    timeout="auto"
                    unmountOnExit
                >
                    <MyLikes myLikes={details.myLikes} />
                </Collapse>
            </CardContent>
        </Card>
    );
};

export default UserData;
