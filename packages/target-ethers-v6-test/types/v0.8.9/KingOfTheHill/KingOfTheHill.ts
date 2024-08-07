/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace KingOfTheHill {
  export type BidStruct = { bidder: AddressLike; value: BigNumberish };

  export type BidStructOutput = [bidder: string, value: bigint] & {
    bidder: string;
    value: bigint;
  };
}

export interface KingOfTheHillInterface extends Interface {
  getFunction(
    nameOrSignature: "bid" | "highestBid" | "withdraw"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "HighestBidIncreased"): EventFragment;

  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "highestBid",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "highestBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace HighestBidIncreasedEvent {
  export type InputTuple = [bid: KingOfTheHill.BidStruct];
  export type OutputTuple = [bid: KingOfTheHill.BidStructOutput];
  export interface OutputObject {
    bid: KingOfTheHill.BidStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface KingOfTheHill extends BaseContract {
  connect(runner?: ContractRunner | null): KingOfTheHill;
  waitForDeployment(): Promise<this>;

  interface: KingOfTheHillInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  bid: TypedContractMethod<[], [void], "payable">;

  highestBid: TypedContractMethod<
    [],
    [[string, bigint] & { bidder: string; value: bigint }],
    "view"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bid"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "highestBid"
  ): TypedContractMethod<
    [],
    [[string, bigint] & { bidder: string; value: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "HighestBidIncreased"
  ): TypedContractEvent<
    HighestBidIncreasedEvent.InputTuple,
    HighestBidIncreasedEvent.OutputTuple,
    HighestBidIncreasedEvent.OutputObject
  >;

  filters: {
    "HighestBidIncreased(tuple)": TypedContractEvent<
      HighestBidIncreasedEvent.InputTuple,
      HighestBidIncreasedEvent.OutputTuple,
      HighestBidIncreasedEvent.OutputObject
    >;
    HighestBidIncreased: TypedContractEvent<
      HighestBidIncreasedEvent.InputTuple,
      HighestBidIncreasedEvent.OutputTuple,
      HighestBidIncreasedEvent.OutputObject
    >;
  };
}
