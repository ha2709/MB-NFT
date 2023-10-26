import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h5',
            null,
            'Your Balance: ',
            balance
        ),
        React.createElement(
            'button',
            { onClick: () => getBalance() },
            'Show My Balance'
        )
    );
};

export default WalletBalance;

