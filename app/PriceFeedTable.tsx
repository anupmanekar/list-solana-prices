// PriceFeedTable.tsx
import React from 'react';
import { Price, PriceFeed, PriceFeedTableProps } from './types';


class PriceFeedTable extends React.Component<PriceFeedTableProps> {
    formatPrice(price: Price): string {
        const actualPrice = Number(price.price) * Math.pow(10, price.expo);
        return `$${actualPrice.toFixed(2)}`;
    }

    formatConfidence(price: Price): string {
        const confidence = Number(price.conf) * Math.pow(10, price.expo);
        return `±$${confidence.toFixed(2)}`;
    }

    formatTime(timestamp: number): string {
        return new Date(timestamp * 1000).toLocaleString();
    }

    isPriceFresh(publishTime: number): boolean {
        const currentTime = Math.floor(Date.now() / 1000);
        return (currentTime - publishTime) <= 60; // Consider prices within last 60 seconds as fresh
    }

    render() {
        const { priceFeeds } = this.props;

        return (
            <table className="price-feed-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Current Price</th>
                        <th>EMA Price</th>
                        <th>Confidence</th>
                        <th>Publish Time</th>
                        <th>Fresh</th>
                    </tr>
                </thead>
                <tbody>
                    {priceFeeds.map((feed) => (
                        <tr key={feed.id}>
                            <td>{feed.id.slice(0, 8)}...</td>
                            <td>{this.formatPrice(feed.price)}</td>
                            <td>{this.formatPrice(feed.emaPrice)}</td>
                            <td>{this.formatConfidence(feed.price)}</td>
                            <td>{this.formatTime(feed.price.publishTime)}</td>
                            <td>{this.isPriceFresh(feed.price.publishTime) ? '✅' : '❌'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default PriceFeedTable;