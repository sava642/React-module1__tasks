import React from "react";

import user from '../json/user.json';
import Profile from './Task1/Profile';

import dataStatistic from '../json/data.json';
import Statistics from "./Task2/Statistics";

import friends from '../json/friends.json';
import FriendList from "./Task3/FriendList";

import transactions from '../json/transactions.json';
import TransactionHistory from "./Task4/TransactionHistory";


export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        stats={dataStatistic}
        title="UPLOAD STATS"
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </>
  )
}


