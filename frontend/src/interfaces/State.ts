import { ICharacter } from './Character';
import { IWeapon } from './Weapon';
import { ITarget } from './Target';
import { Contracts } from './Contracts';

export interface IStakeState {
  ownBalance: string;
  stakedBalance: string;
  remainingCapacityForDeposit: string | null;
  remainingCapacityForWithdraw: string;
  contractBalance: string;
  currentRewardEarned: string;
  rewardMinimumStakeTime: number;
  rewardDistributionTimeLeft: number;
  unlockTimeLeft: number;
}

export interface IStakeOverviewState {
  stakeSkillRewardRate: string;
  stakeSkillRewardsDuration: number;
  stakeSkillTotalSupply: string;

  stakeLpRewardRate: string;
  stakeLpRewardsDuration: number;
  stakeLpTotalSupply: string;
}

export interface IRaidState {
  expectedFinishTime: string;
  raiderCount: number;
  bounty: string;
  totalPower: string;
  weaponDrops: string[];
  staminaDrainSeconds: number;

  isOwnedCharacterRaidingById: Record<number, boolean>; // ?
}

export interface IState {
  contracts: Contracts;
  accounts: string[];
  defaultAccount: string | null;
  currentNetworkId: number | null;

  skillBalance: string;
  ownedCharacterIds: number[];
  ownedWeaponIds: number[];
  maxStamina: number;

  currentCharacterId: number | null;
  characters: Record<number, ICharacter>;
  characterStaminas: Record<number, number>;

  weapons: Record<number, IWeapon>;
  targetsByCharacterIdAndWeaponId: Record<number, Record<number, ITarget>>;

  staking: {
    skill: IStakeState,
    lp: IStakeState
  };
  stakeOverview: IStakeOverviewState | null;

  raid: IRaidState;
}