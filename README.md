# Umpire

Umpire makes it easy for game developers to:

1. Create tamper-proof leaderboards which accept updates directly from their players in a trustless manner.
2. Self-host the server on public clouds without requiring advanced DevOps or infrastructure skills.

Umpire is written in Typescript.

## Philosophy

Umpire has been designed with the following principles in mind:

### Best practices should be easy to apply

It is difficult to run leaderboards that accept data directly from game clients. Even the slightest
vulnerability and players will find ways to pump their scores without fairly playing the game.

This is especially a problem in the context of web3 games, which seek to offload as much computation
as possible away from game servers and onto some combination of game client and blockchain.

We have been running production leaderboards for web3 games since February 2022. When the position on
your leaderboards determines the real money of assets a player can earn in rewards, your players _will_
find ways to exploit any vulnerabilities in those leaderboards. We could write many essays and blog
posts describing what we have learned, so that others may not fall prey to hackers.

But we prefer to write code. Umpire is that code.

### Typescript as a configuration language

We do not believe in defining complex domain-specific languages (DSLs) for configuration. Instead Umpire
requires you to configure your server in Typescript.

We understand that you may not be comfortable with Typescript. We have tried to make it as easy as on you
as we possibly can. But there's no getting around the fact that, if you want to use Umpire, you will
have to write some Typescript.

## Technical details

Umpire consists of the following modules:

### Score definition

Each Umpire server is configured with score definitions. These definitions define the universe of ways
in which a player can receive points on a leaderboard being maintained by Umpire.

Umpire cannot know beforehand what events you would like to contribute to the score on your leaderboard,
so it leaves it to you as a game developer to define this mapping in code.

The keys of this mapping are event names: `event_name: string`.

In the score definition mapping, the value corresponding to each `event_name` is a function of the form:

```typescript
(num_occurences: number) => number;
```

In short, the score definition is an object of type:

```typescript
type ScoreDefinition = {
  [event_name: string]: (num_occurences: number) => number;
};
```

### Score validation

### Leaderboard backend

Umpire natively uses the [Moonstream Leaderboard API](https://moonstream.to) as a backend. Like Umpire,
the Moonstream Leaderboard API is free software, and can be self-hosted. You can find the implementation
of this API in the [`moonstream-to/apis` GitHub repository](https://github.com/moonstream-to/api).

It can be extended to support other leaderboard backends. If you do extend this code to support another
_commonly used_ leaderboard backend, we will accept a pull request adding that support to the upstream
repository at https://github.com/moonstream-to/umpire.
