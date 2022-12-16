import React, { useEffect, useState } from "react";
import { Box, Card, Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import { PageHeader } from "../../Common/CommonComponent";
import { DisplayCardGraph } from "../../Common/GraphComponent";
import { CardContent } from "@material-ui/core";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import {
  fakeArrayDataGenerator,
  randomValueGenerator,
} from "../../../utils/fakeArrayDataGenetator";
import { green, indigo, red } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import UserOverviewComponent from "./UserOverviewComponent";
import ListSection from "./ListSection";

export default function Dashboard() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);
  const [posts] = useState([]);
  const [authors] = useState([]);

  const DisplayData = [
    {
      label: "Attendance (Per Month)",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "4%",
    },
    {
      label: "Submissions (Per Month)",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "9%",
    },
  ];

  const GraphCardData = [
    {
      id: "Attendance (Per Month)",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: blue[500],
      bgColor: blue[50],
    },
    {
      id: "Submissions (Per Month)",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: indigo[500],
      bgColor: indigo[50],
    },
  ];

  useEffect(() => {
    if (!fetched) {
      GraphCardData.map((item, i) =>
        DisplayCardGraph({
          id: item.id,
          data: item.data,
          brColor: item.brColor,
          bgColor: item.bgColor,
        })
      );
      setFetched(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);

  // for api calling

  return (
    <Box>
      {/* section title
      section card
      section graph
      section posts */}

      <PageHeader
        label="Dashboard"
        pageTitle="student attendance/submission overview"
      />
      <Grid container spacing={3}>
        {DisplayData.map((item, i) => (
          <Grid item xs={10} sm={12} key={i}>
            <Card>
              <CardContent className={classes.cardContent}>
                <canvas
                  id={item.label}
                  className={classes.displayCardGraph}
                ></canvas>

                <Typography variant="body2" className={classes.cardLabel}>
                  {item.label}
                </Typography>
                <Typography
                  variant="h5"
                  component="h6"
                  className={classes.cardTitle}
                >
                  {item.value}
                </Typography>
                <Typography
                  component="p"
                  style={{
                    textAlign: "center",
                    marginBottom: "0px",
                  }}
                >
                  <Button
                    size="small"
                    className={classes.ratioBtn}
                    startIcon={item.icon}
                    style={{
                      color: item.label[0] === "P" ? green[600] : red[500],
                    }}
                  >
                    {item.iconLabel}
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <UserOverviewComponent />
    </Box>
  );
}
