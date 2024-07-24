interface Price {
    conf: string;
    expo: number;
    price: string;
    publishTime: number;
}

interface PriceFeed {
    emaPrice: Price;
    id: string;
    metadata: any;
    vaa: string;
    price: Price;
}

interface PriceFeedTableProps {
    priceFeeds: PriceFeed[];
}

export {Price, PriceFeed, PriceFeedTableProps}