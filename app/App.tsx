// App.tsx
import React from 'react';
import PriceFeedTable from './PriceFeedTable';
import { Price, PriceFeed, PriceFeedTableProps } from './types';

interface AppState {
    priceFeeds: PriceFeed[];
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            priceFeeds: [
                {
                    emaPrice: {
                        conf: '3253199200',
                        expo: -8,
                        price: '6578013100000',
                        publishTime: 1721788580
                    },
                    id: 'e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
                    metadata: undefined,
                    vaa: 'asf',
                    price: {
                        conf: '2782571691',
                        expo: -8,
                        price: '6571620000000',
                        publishTime: 1721788580
                    }
                },
                // ... more price feeds
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <h1>Price Feeds</h1>
                <PriceFeedTable priceFeeds={this.state.priceFeeds} />
            </div>
        );
    }
}

export default App;