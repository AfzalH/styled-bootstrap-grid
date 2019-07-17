declare type oneToTwelve = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
declare type zeroToTwelve = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
declare type zeroToEleven = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export declare type End = 'first' | 'last';
export declare type Column = oneToTwelve | true | 'auto';
export declare type Order = zeroToTwelve | End;
export declare type Offset = zeroToEleven;
export declare type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export declare type AlignSelf = Align | 'auto';
export declare type ColProps = {
    noGutter?: boolean;
    col?: Column;
    auto?: boolean;
    alignSelf?: AlignSelf;
    offset?: Offset;
    order?: Order;
    xs?: Column;
    xsOffset?: Offset;
    xsAuto?: boolean;
    xsAlignSelf?: AlignSelf;
    xsOrder?: Order;
    hiddenXsUp?: boolean;
    hiddenXsDown?: boolean;
    sm?: Column;
    smOffset?: Offset;
    smAuto?: boolean;
    smAlignSelf?: AlignSelf;
    smOrder?: Order;
    hiddenSmUp?: boolean;
    hiddenSmDown?: boolean;
    md?: Column;
    mdOffset?: Offset;
    mdAuto?: boolean;
    mdAlignSelf?: AlignSelf;
    mdOrder?: Order;
    hiddenMdUp?: boolean;
    hiddenMdDown?: boolean;
    lg?: Column;
    lgOffset?: Offset;
    lgAuto?: boolean;
    lgAlignSelf?: AlignSelf;
    lgOrder?: Order;
    hiddenLgUp?: boolean;
    hiddenLgDown?: boolean;
    xl?: Column;
    xlOffset?: Offset;
    xlAuto?: boolean;
    xlAlignSelf?: AlignSelf;
    xlOrder?: Order;
    hiddenXlUp?: boolean;
    hiddenXlDown?: boolean;
};
export declare type ColCss = {
    col: {
        [K in oneToTwelve | 'true' | 'auto']: string;
    };
    offset: {
        [K in Offset]: string;
    };
    order: {
        [K in Order]: string;
    };
    alignSelf: {
        [K in AlignSelf]: string;
    };
    display: {
        none: string;
    };
    noGutter: string;
};
export {};
