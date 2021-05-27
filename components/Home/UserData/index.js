import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    Collapse,
    IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import styles from "../../../styles/Home/Home.module.scss";
import UserEducation from "./Education";
import UserName from "./Name";

const UserData = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={styles.UserDataContainer} variant="outlined">
            <CardContent>
                <UserName />

                <CardActions disableSpacing>
                    <div className={styles.title}>Education</div>
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <UserEducation />
                </Collapse>
            </CardContent>
        </Card>
    );
};

export default UserData;
