// Contract ABI
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "claimId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isApproved",
                "type": "bool"
            }
        ],
        "name": "ClaimProcessed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "claimId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "name": "ClaimSubmitted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FundsWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "coverageAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "premiumAmount",
                "type": "uint256"
            }
        ],
        "name": "PolicyCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "expiryTime",
                "type": "uint256"
            }
        ],
        "name": "PolicyPurchased",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_policyId",
                "type": "uint256"
            }
        ],
        "name": "buyPolicy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "claims",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isApproved",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isRejected",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_coverageAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_premiumAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_duration",
                "type": "uint256"
            }
        ],
        "name": "createPolicy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getClaimCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoliciesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserPoliciesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "policies",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "coverageAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "premiumAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_claimId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_approve",
                "type": "bool"
            }
        ],
        "name": "processClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_policyId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_reason",
                "type": "string"
            }
        ],
        "name": "submitClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userPolicies",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expiryTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "hasActiveClaim",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Contract address on Sepolia testnet
const contractAddress = '0x0ade10cb8f0a526191ffd66f8488937d8bc5ea8c';

let contract;
let provider;
let signer;
let userAddress;
let isAdmin = false;
let isLoadingPolicies = false;
let isLoadingClaims = false;
let isLoadingUserPolicies = false;

// Initialize the application
async function init() {
    // Setup event listeners
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('getStarted').addEventListener('click', () => navigateTo('policies'));
    document.getElementById('createPolicyBtn').addEventListener('click', showCreatePolicyModal);
    document.getElementById('withdrawFundsBtn').addEventListener('click', withdrawFunds);
    document.getElementById('refreshDataBtn').addEventListener('click', refreshAdminData);
    document.getElementById('claimForm').addEventListener('submit', submitClaim);
    document.getElementById('createPolicyForm').addEventListener('submit', createPolicy);
    
    // Claims filter buttons
    document.getElementById('showAllClaims').addEventListener('click', () => filterClaims('all'));
    document.getElementById('showPendingClaims').addEventListener('click', () => filterClaims('pending'));
    document.getElementById('showApprovedClaims').addEventListener('click', () => filterClaims('approved'));
    document.getElementById('showRejectedClaims').addEventListener('click', () => filterClaims('rejected'));
    
    // User tab buttons
    document.getElementById('myPoliciesTab').addEventListener('click', () => switchUserTab('policies'));
    document.getElementById('myClaimsTab').addEventListener('click', () => switchUserTab('claims'));
    document.getElementById('myTransactionsTab').addEventListener('click', () => switchUserTab('transactions'));
    
    // User claims filter buttons
    document.getElementById('showAllMyClaims').addEventListener('click', () => filterUserClaims('all'));
    document.getElementById('showPendingMyClaims').addEventListener('click', () => filterUserClaims('pending'));
    document.getElementById('showApprovedMyClaims').addEventListener('click', () => filterUserClaims('approved'));
    document.getElementById('showRejectedMyClaims').addEventListener('click', () => filterUserClaims('rejected'));
    
    // Setup navigation
    setupNavigation();
    
    // Setup modal
    setupModal();
}

// Connect to MetaMask wallet
async function connectWallet() {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this application');
            return;
        }

        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAddress = accounts[0];

        // Setup ethers provider and signer
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Check if user is admin
        const owner = await contract.owner();
        isAdmin = owner.toLowerCase() === userAddress.toLowerCase();

        // Update UI
        document.getElementById('connectWallet').textContent = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        document.querySelectorAll('.admin-only').forEach(el => {
            el.style.display = isAdmin ? 'block' : 'none';
        });

        // Load initial data
        loadPolicies();
        if (isAdmin) {
            loadClaims();
        }

        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Error connecting wallet. Please try again.');
    }
}

// Handle account changes
async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // User disconnected their wallet
        userAddress = null;
        document.getElementById('connectWallet').textContent = 'Connect Wallet';
        document.querySelectorAll('.admin-only').forEach(el => {
            el.style.display = 'none';
        });
    } else {
        // User switched accounts
        userAddress = accounts[0];
        document.getElementById('connectWallet').textContent = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        await connectWallet();
    }
}

// Navigation setup
function setupNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            navigateTo(page);
        });
    });
}

// Navigate to a specific page
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    // Load page-specific data
    switch (page) {
        case 'policies':
            loadPolicies();
            break;
        case 'my-policies':
            loadUserDashboard();
            break;
        case 'submit-claim':
            loadPoliciesForClaim();
            break;
        case 'admin':
            if (isAdmin) {
                loadAdminData();
            }
            break;
    }
}

// Load available policies
async function loadPolicies() {
    // Prevent multiple simultaneous calls
    if (isLoadingPolicies) {
        console.log('Policies are already loading, skipping duplicate call');
        return;
    }
    
    isLoadingPolicies = true;
    
    try {
        const policiesList = document.getElementById('policiesList');
        if (!policiesList) {
            console.error('Policies list element not found');
            return;
        }
        
        // Clear existing content completely
        policiesList.innerHTML = '';
        
        // Add a loading indicator
        policiesList.innerHTML = '<div class="loading">Loading policies...</div>';

        const policyCount = await contract.getPoliciesCount();
        
        // Clear loading indicator and prepare for new content
        policiesList.innerHTML = '';
        
        for (let i = 0; i < policyCount; i++) {
            const policy = await contract.policies(i);
            if (policy.isActive) {
                const policyCard = createPolicyCard(policy, i);
                policiesList.appendChild(policyCard);
            }
        }
        
        // If no active policies found, show a message
        if (policiesList.children.length === 0) {
            policiesList.innerHTML = '<div class="no-policies">No active policies available.</div>';
        }
    } catch (error) {
        console.error('Error loading policies:', error);
        const policiesList = document.getElementById('policiesList');
        if (policiesList) {
            policiesList.innerHTML = '<div class="error">Error loading policies. Please try again.</div>';
        }
        alert('Error loading policies. Please try again.');
    } finally {
        isLoadingPolicies = false;
    }
}

// Create policy card element
function createPolicyCard(policy, policyId) {
    const card = document.createElement('div');
    card.className = 'policy-card';
    
    card.innerHTML = `
        <h3>${policy.name}</h3>
        <div class="policy-details">
            <p>Coverage: ${ethers.utils.formatEther(policy.coverageAmount)} ETH</p>
            <p>Premium: ${ethers.utils.formatEther(policy.premiumAmount)} ETH</p>
            <p>Duration: ${policy.duration} days</p>
        </div>
        <button class="buy-policy-btn" data-policy-id="${policyId}">Buy Policy</button>
    `;

    card.querySelector('.buy-policy-btn').addEventListener('click', () => buyPolicy(policyId));
    
    return card;
}

// Buy a policy
async function buyPolicy(policyId) {
    try {
        const policy = await contract.policies(policyId);
        const tx = await contract.buyPolicy(policyId, { value: policy.premiumAmount });
        await tx.wait();
        
        alert('Policy purchased successfully!');
        loadPolicies();
        loadUserPolicies();
    } catch (error) {
        console.error('Error buying policy:', error);
        alert('Error buying policy. Please try again.');
    }
}

// Load user's policies
async function loadUserPolicies() {
    // Prevent multiple simultaneous calls
    if (isLoadingUserPolicies) {
        console.log('User policies are already loading, skipping duplicate call');
        return;
    }
    
    isLoadingUserPolicies = true;
    
    try {
        const myPoliciesList = document.getElementById('myPoliciesList');
        if (!myPoliciesList) {
            console.error('My policies list element not found');
            return;
        }
        
        // Clear existing content completely
        myPoliciesList.innerHTML = '';
        
        // Add a loading indicator
        myPoliciesList.innerHTML = '<div class="loading">Loading your policies...</div>';

        const policyCount = await contract.getUserPoliciesCount(userAddress);
        
        // Clear loading indicator and prepare for new content
        myPoliciesList.innerHTML = '';
        
        for (let i = 0; i < policyCount; i++) {
            const userPolicy = await contract.userPolicies(userAddress, i);
            const policy = await contract.policies(userPolicy.policyId);
            
            const policyCard = document.createElement('div');
            policyCard.className = 'policy-card';
            
            const expiryDate = new Date(userPolicy.expiryTime * 1000);
            
            // Check if there are any processed claims for this policy
            let claimStatus = null;
            const claimCount = await contract.getClaimCount();
            
            for (let j = 0; j < claimCount; j++) {
                const claim = await contract.claims(j);
                if (claim.user.toLowerCase() === userAddress.toLowerCase() && 
                    claim.policyId.toString() === userPolicy.policyId.toString()) {
                    if (claim.isApproved) {
                        claimStatus = 'Claim Approved';
                        break;
                    } else if (claim.isRejected) {
                        claimStatus = 'Claim Rejected';
                        break;
                    }
                }
            }
            
            // Determine status based on claim status, active claims, and expiry
            let status;
            if (claimStatus) {
                status = claimStatus;
            } else if (userPolicy.hasActiveClaim) {
                status = 'Claim Pending';
            } else if (Date.now() > expiryDate) {
                status = 'Expired';
            } else {
                status = 'Active';
            }
            
            policyCard.innerHTML = `
                <h3>${policy.name}</h3>
                <div class="policy-details">
                    <p>Coverage: ${ethers.utils.formatEther(policy.coverageAmount)} ETH</p>
                    <p>Expiry: ${expiryDate.toLocaleDateString()}</p>
                    <p>Status: <span class="status status-${status.toLowerCase().replace(' ', '-')}">${status}</span></p>
                </div>
            `;
            
            myPoliciesList.appendChild(policyCard);
        }
        
        // If no policies found, show a message
        if (myPoliciesList.children.length === 0) {
            myPoliciesList.innerHTML = '<div class="no-policies">You don\'t have any insurance policies yet.</div>';
        }
    } catch (error) {
        console.error('Error loading user policies:', error);
        const myPoliciesList = document.getElementById('myPoliciesList');
        if (myPoliciesList) {
            myPoliciesList.innerHTML = '<div class="error">Error loading your policies. Please try again.</div>';
        }
        alert('Error loading your policies. Please try again.');
    } finally {
        isLoadingUserPolicies = false;
    }
}

// Load user's active policies for claim form dropdown
async function loadPoliciesForClaim() {
    try {
        const policySelect = document.getElementById('policySelect');
        policySelect.innerHTML = '<option value="">Select a policy...</option>';

        const policyCount = await contract.getUserPoliciesCount(userAddress);
        
        for (let i = 0; i < policyCount; i++) {
            const userPolicy = await contract.userPolicies(userAddress, i);
            const policy = await contract.policies(userPolicy.policyId);
            
            const expiryDate = new Date(userPolicy.expiryTime * 1000);
            const isExpired = Date.now() > expiryDate;
            const hasActiveClaim = userPolicy.hasActiveClaim;
            
            // Check if there are any processed claims for this policy
            let hasProcessedClaim = false;
            const claimCount = await contract.getClaimCount();
            
            for (let j = 0; j < claimCount; j++) {
                const claim = await contract.claims(j);
                if (claim.user.toLowerCase() === userAddress.toLowerCase() && 
                    claim.policyId.toString() === userPolicy.policyId.toString()) {
                    if (claim.isApproved || claim.isRejected) {
                        hasProcessedClaim = true;
                        break;
                    }
                }
            }
            
            // Only show active policies without pending claims and without processed claims
            if (!isExpired && !hasActiveClaim && !hasProcessedClaim) {
                const option = document.createElement('option');
                option.value = userPolicy.policyId;
                option.textContent = `${policy.name} - Coverage: ${ethers.utils.formatEther(policy.coverageAmount)} ETH`;
                policySelect.appendChild(option);
            }
        }
        
        // If no active policies available, show a message
        if (policySelect.children.length === 1) {
            policySelect.innerHTML = '<option value="">No active policies available for claims</option>';
        }
    } catch (error) {
        console.error('Error loading policies for claim:', error);
        alert('Error loading your policies. Please try again.');
    }
}

// Submit a claim
async function submitClaim(e) {
    e.preventDefault();
    
    try {
        const policyId = document.getElementById('policySelect').value;
        const reason = document.getElementById('claimReason').value;
        
        const tx = await contract.submitClaim(policyId, reason);
        await tx.wait();
        
        alert('Claim submitted successfully!');
        document.getElementById('claimForm').reset();
        loadUserPolicies();
        loadPoliciesForClaim();
    } catch (error) {
        console.error('Error submitting claim:', error);
        alert('Error submitting claim. Please try again.');
    }
}

// Load claims (admin only)
async function loadClaims() {
    // Prevent multiple simultaneous calls
    if (isLoadingClaims) {
        console.log('Claims are already loading, skipping duplicate call');
        return;
    }
    
    isLoadingClaims = true;
    
    try {
        const claimsList = document.getElementById('claimsList');
        if (!claimsList) {
            console.error('Claims list element not found');
            return;
        }
        
        // Clear existing content completely
        claimsList.innerHTML = '';
        
        // Add a loading indicator
        claimsList.innerHTML = '<div class="loading">Loading claims...</div>';

        const claimCount = await contract.getClaimCount();
        
        // Clear loading indicator and prepare for new content
        claimsList.innerHTML = '';
        
        for (let i = 0; i < claimCount; i++) {
            const claim = await contract.claims(i);
            if (!claim.isApproved && !claim.isRejected) {
                const policy = await contract.policies(claim.policyId);
                
                const claimCard = document.createElement('div');
                claimCard.className = 'claim-card';
                
                claimCard.innerHTML = `
                    <h3>Claim #${claim.id}</h3>
                    <div class="claim-details">
                        <p>User: ${claim.user}</p>
                        <p>Policy: ${policy.name}</p>
                        <p>Reason: ${claim.reason}</p>
                        <p>Submitted: ${new Date(claim.timestamp * 1000).toLocaleString()}</p>
                    </div>
                    <div class="claim-actions">
                        <button class="admin-button approve-btn" data-claim-id="${claim.id}">Approve</button>
                        <button class="admin-button reject-btn" data-claim-id="${claim.id}">Reject</button>
                    </div>
                `;
                
                claimCard.querySelector('.approve-btn').addEventListener('click', () => processClaim(claim.id, true));
                claimCard.querySelector('.reject-btn').addEventListener('click', () => processClaim(claim.id, false));
                
                claimsList.appendChild(claimCard);
            }
        }
        
        // If no pending claims found, show a message
        if (claimsList.children.length === 0) {
            claimsList.innerHTML = '<div class="no-policies">No pending claims available.</div>';
        }
    } catch (error) {
        console.error('Error loading claims:', error);
        const claimsList = document.getElementById('claimsList');
        if (claimsList) {
            claimsList.innerHTML = '<div class="error">Error loading claims. Please try again.</div>';
        }
        alert('Error loading claims. Please try again.');
    } finally {
        isLoadingClaims = false;
    }
}

// Process a claim (admin only)
async function processClaim(claimId, approve) {
    try {
        const tx = await contract.processClaim(claimId, approve);
        await tx.wait();
        
        alert(`Claim ${approve ? 'approved' : 'rejected'} successfully!`);
        refreshAdminData();
    } catch (error) {
        console.error('Error processing claim:', error);
        alert('Error processing claim. Please try again.');
    }
}

// Show create policy modal
function showCreatePolicyModal() {
    document.getElementById('createPolicyModal').style.display = 'block';
}

// Setup modal functionality
function setupModal() {
    const modal = document.getElementById('createPolicyModal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Create a new policy (admin only)
async function createPolicy(e) {
    e.preventDefault();
    
    try {
        const name = document.getElementById('policyName').value;
        const coverageAmount = ethers.utils.parseEther(document.getElementById('coverageAmount').value);
        const premiumAmount = ethers.utils.parseEther(document.getElementById('premiumAmount').value);
        const duration = document.getElementById('duration').value;
        
        const tx = await contract.createPolicy(name, coverageAmount, premiumAmount, duration);
        await tx.wait();
        
        alert('Policy created successfully!');
        document.getElementById('createPolicyForm').reset();
        document.getElementById('createPolicyModal').style.display = 'none';
        loadPolicies();
        if (isAdmin) {
            refreshAdminData();
        }
    } catch (error) {
        console.error('Error creating policy:', error);
        alert('Error creating policy. Please try again.');
    }
}

// Withdraw funds (admin only)
async function withdrawFunds() {
    try {
        const tx = await contract.withdrawFunds();
        await tx.wait();
        
        alert('Funds withdrawn successfully!');
        refreshAdminData();
    } catch (error) {
        console.error('Error withdrawing funds:', error);
        alert('Error withdrawing funds. Please try again.');
    }
}

// Load all admin data
async function loadAdminData() {
    if (!isAdmin) return;
    
    try {
        await Promise.all([
            loadAdminStats(),
            loadAllPolicies(),
            loadAllClaims()
        ]);
    } catch (error) {
        console.error('Error loading admin data:', error);
    }
}

// Refresh admin data
async function refreshAdminData() {
    if (!isAdmin) return;
    
    try {
        await loadAdminData();
        alert('Admin data refreshed successfully!');
    } catch (error) {
        console.error('Error refreshing admin data:', error);
        alert('Error refreshing admin data. Please try again.');
    }
}

// Load admin statistics
async function loadAdminStats() {
    try {
        // Contract balance
        const balance = await provider.getBalance(contractAddress);
        document.getElementById('contractBalance').textContent = `${ethers.utils.formatEther(balance)} ETH`;
        
        // Total policies
        const policyCount = await contract.getPoliciesCount();
        document.getElementById('totalPolicies').textContent = policyCount.toString();
        
        // Total claims
        const claimCount = await contract.getClaimCount();
        document.getElementById('totalClaims').textContent = claimCount.toString();
        
        // Pending claims count
        let pendingCount = 0;
        for (let i = 0; i < claimCount; i++) {
            const claim = await contract.claims(i);
            if (!claim.isApproved && !claim.isRejected) {
                pendingCount++;
            }
        }
        document.getElementById('pendingClaims').textContent = pendingCount.toString();
        
    } catch (error) {
        console.error('Error loading admin stats:', error);
    }
}

// Load all policies for admin
async function loadAllPolicies() {
    try {
        const allPoliciesList = document.getElementById('allPoliciesList');
        if (!allPoliciesList) return;
        
        allPoliciesList.innerHTML = '';
        
        const policyCount = await contract.getPoliciesCount();
        
        for (let i = 0; i < policyCount; i++) {
            const policy = await contract.policies(i);
            
            const policyCard = document.createElement('div');
            policyCard.className = 'policy-card';
            
            const statusClass = policy.isActive ? 'status-active' : 'status-expired';
            const statusText = policy.isActive ? 'Active' : 'Inactive';
            
            policyCard.innerHTML = `
                <h3>${policy.name}</h3>
                <div class="policy-details">
                    <p>ID: ${policy.id}</p>
                    <p>Coverage: ${ethers.utils.formatEther(policy.coverageAmount)} ETH</p>
                    <p>Premium: ${ethers.utils.formatEther(policy.premiumAmount)} ETH</p>
                    <p>Duration: ${policy.duration} days</p>
                    <p>Status: <span class="status ${statusClass}">${statusText}</span></p>
                </div>
            `;
            
            allPoliciesList.appendChild(policyCard);
        }
        
        if (allPoliciesList.children.length === 0) {
            allPoliciesList.innerHTML = '<div class="no-policies">No policies created yet.</div>';
        }
    } catch (error) {
        console.error('Error loading all policies:', error);
    }
}

// Load all claims for admin
async function loadAllClaims() {
    try {
        const allClaimsList = document.getElementById('allClaimsList');
        if (!allClaimsList) return;
        
        allClaimsList.innerHTML = '';
        
        const claimCount = await contract.getClaimCount();
        
        for (let i = 0; i < claimCount; i++) {
            const claim = await contract.claims(i);
            const policy = await contract.policies(claim.policyId);
            
            const claimCard = document.createElement('div');
            claimCard.className = 'claim-card';
            
            let statusClass, statusText, actionsHtml = '';
            
            if (claim.isApproved) {
                statusClass = 'status-claim-approved';
                statusText = 'Approved';
            } else if (claim.isRejected) {
                statusClass = 'status-claim-rejected';
                statusText = 'Rejected';
            } else {
                statusClass = 'status-claim-pending';
                statusText = 'Pending';
                actionsHtml = `
                    <div class="claim-actions">
                        <button class="admin-button approve-btn" data-claim-id="${claim.id}">Approve</button>
                        <button class="admin-button reject-btn" data-claim-id="${claim.id}">Reject</button>
                    </div>
                `;
            }
            
            claimCard.innerHTML = `
                <h3>Claim #${claim.id}</h3>
                <div class="claim-details">
                    <p>User: ${claim.user}</p>
                    <p>Policy: ${policy.name}</p>
                    <p>Reason: ${claim.reason}</p>
                    <p>Submitted: ${new Date(claim.timestamp * 1000).toLocaleString()}</p>
                    <p>Status: <span class="status ${statusClass}">${statusText}</span></p>
                </div>
                ${actionsHtml}
            `;
            
            // Add event listeners for pending claims
            if (!claim.isApproved && !claim.isRejected) {
                claimCard.querySelector('.approve-btn').addEventListener('click', () => processClaim(claim.id, true));
                claimCard.querySelector('.reject-btn').addEventListener('click', () => processClaim(claim.id, false));
            }
            
            allClaimsList.appendChild(claimCard);
        }
        
        if (allClaimsList.children.length === 0) {
            allClaimsList.innerHTML = '<div class="no-policies">No claims submitted yet.</div>';
        }
    } catch (error) {
        console.error('Error loading all claims:', error);
    }
}

// Filter claims by status
function filterClaims(status) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const allClaimsList = document.getElementById('allClaimsList');
    const claimCards = allClaimsList.querySelectorAll('.claim-card');
    
    claimCards.forEach(card => {
        const statusSpan = card.querySelector('.status');
        const claimStatus = statusSpan.textContent.toLowerCase();
        
        let shouldShow = false;
        
        switch (status) {
            case 'all':
                shouldShow = true;
                break;
            case 'pending':
                shouldShow = claimStatus === 'pending';
                break;
            case 'approved':
                shouldShow = claimStatus === 'approved';
                break;
            case 'rejected':
                shouldShow = claimStatus === 'rejected';
                break;
        }
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Load user dashboard
async function loadUserDashboard() {
    try {
        await Promise.all([
            loadUserStats(),
            loadUserPolicies(),
            loadUserClaims(),
            loadUserTransactions()
        ]);
    } catch (error) {
        console.error('Error loading user dashboard:', error);
    }
}

// Load user statistics
async function loadUserStats() {
    try {
        // User policy count
        const policyCount = await contract.getUserPoliciesCount(userAddress);
        document.getElementById('userPolicyCount').textContent = policyCount.toString();
        
        // User balance
        const balance = await provider.getBalance(userAddress);
        document.getElementById('userBalance').textContent = `${ethers.utils.formatEther(balance)} ETH`;
        
        // User claims count
        const claimCount = await contract.getClaimCount();
        let userTotalClaims = 0;
        let userActiveClaims = 0;
        
        for (let i = 0; i < claimCount; i++) {
            const claim = await contract.claims(i);
            if (claim.user.toLowerCase() === userAddress.toLowerCase()) {
                userTotalClaims++;
                if (!claim.isApproved && !claim.isRejected) {
                    userActiveClaims++;
                }
            }
        }
        
        document.getElementById('userTotalClaims').textContent = userTotalClaims.toString();
        document.getElementById('userActiveClaims').textContent = userActiveClaims.toString();
        
    } catch (error) {
        console.error('Error loading user stats:', error);
    }
}

// Load user claims
async function loadUserClaims() {
    try {
        const myClaimsList = document.getElementById('myClaimsList');
        if (!myClaimsList) return;
        
        myClaimsList.innerHTML = '';
        
        const claimCount = await contract.getClaimCount();
        
        for (let i = 0; i < claimCount; i++) {
            const claim = await contract.claims(i);
            if (claim.user.toLowerCase() === userAddress.toLowerCase()) {
                const policy = await contract.policies(claim.policyId);
                
                const claimCard = document.createElement('div');
                claimCard.className = 'claim-card';
                
                let statusClass, statusText;
                
                if (claim.isApproved) {
                    statusClass = 'status-claim-approved';
                    statusText = 'Approved';
                } else if (claim.isRejected) {
                    statusClass = 'status-claim-rejected';
                    statusText = 'Rejected';
                } else {
                    statusClass = 'status-claim-pending';
                    statusText = 'Pending';
                }
                
                claimCard.innerHTML = `
                    <h3>Claim #${claim.id}</h3>
                    <div class="claim-details">
                        <p>Policy: ${policy.name}</p>
                        <p>Reason: ${claim.reason}</p>
                        <p>Submitted: ${new Date(claim.timestamp * 1000).toLocaleString()}</p>
                        <p>Status: <span class="status ${statusClass}">${statusText}</span></p>
                    </div>
                `;
                
                myClaimsList.appendChild(claimCard);
            }
        }
        
        if (myClaimsList.children.length === 0) {
            myClaimsList.innerHTML = '<div class="no-policies">You haven\'t submitted any claims yet.</div>';
        }
    } catch (error) {
        console.error('Error loading user claims:', error);
    }
}

// Load user transactions
async function loadUserTransactions() {
    try {
        const myTransactionsList = document.getElementById('myTransactionsList');
        if (!myTransactionsList) return;
        
        myTransactionsList.innerHTML = '';
        
        // Get user policies for purchase transactions
        const policyCount = await contract.getUserPoliciesCount(userAddress);
        const transactions = [];
        
        for (let i = 0; i < policyCount; i++) {
            const userPolicy = await contract.userPolicies(userAddress, i);
            const policy = await contract.policies(userPolicy.policyId);
            
            transactions.push({
                type: 'purchase',
                policyName: policy.name,
                amount: policy.premiumAmount,
                timestamp: userPolicy.startTime,
                policyId: userPolicy.policyId
            });
        }
        
        // Get user claims for claim transactions
        const claimCount = await contract.getClaimCount();
        
        for (let i = 0; i < claimCount; i++) {
            const claim = await contract.claims(i);
            if (claim.user.toLowerCase() === userAddress.toLowerCase()) {
                const policy = await contract.policies(claim.policyId);
                
                transactions.push({
                    type: claim.isApproved ? 'approved' : (claim.isRejected ? 'rejected' : 'claim'),
                    policyName: policy.name,
                    amount: claim.isApproved ? policy.coverageAmount : 0,
                    timestamp: claim.timestamp,
                    claimId: claim.id,
                    reason: claim.reason
                });
            }
        }
        
        // Sort transactions by timestamp (newest first)
        transactions.sort((a, b) => b.timestamp - a.timestamp);
        
        // Display transactions
        transactions.forEach(transaction => {
            const transactionCard = document.createElement('div');
            transactionCard.className = `transaction-card ${transaction.type}`;
            
            let title, description, amount;
            
            switch (transaction.type) {
                case 'purchase':
                    title = 'Policy Purchased';
                    description = `Purchased ${transaction.policyName}`;
                    amount = `-${ethers.utils.formatEther(transaction.amount)} ETH`;
                    break;
                case 'claim':
                    title = 'Claim Submitted';
                    description = `Claim for ${transaction.policyName}`;
                    amount = 'Pending';
                    break;
                case 'approved':
                    title = 'Claim Approved';
                    description = `Claim for ${transaction.policyName} - ${transaction.reason}`;
                    amount = `+${ethers.utils.formatEther(transaction.amount)} ETH`;
                    break;
                case 'rejected':
                    title = 'Claim Rejected';
                    description = `Claim for ${transaction.policyName} - ${transaction.reason}`;
                    amount = 'Rejected';
                    break;
            }
            
            transactionCard.innerHTML = `
                <div class="transaction-details">
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <p>Date: ${new Date(transaction.timestamp * 1000).toLocaleString()}</p>
                    <p class="transaction-amount">${amount}</p>
                </div>
            `;
            
            myTransactionsList.appendChild(transactionCard);
        });
        
        if (myTransactionsList.children.length === 0) {
            myTransactionsList.innerHTML = '<div class="no-policies">No transactions found.</div>';
        }
    } catch (error) {
        console.error('Error loading user transactions:', error);
    }
}

// Switch user tabs
function switchUserTab(tab) {
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`my${tab.charAt(0).toUpperCase() + tab.slice(1)}Tab`).classList.add('active');
    
    // Update active tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`my${tab.charAt(0).toUpperCase() + tab.slice(1)}Content`).classList.add('active');
}

// Filter user claims by status
function filterUserClaims(status) {
    // Update active filter button
    document.querySelectorAll('#myClaimsContent .filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const myClaimsList = document.getElementById('myClaimsList');
    const claimCards = myClaimsList.querySelectorAll('.claim-card');
    
    claimCards.forEach(card => {
        const statusSpan = card.querySelector('.status');
        const claimStatus = statusSpan.textContent.toLowerCase();
        
        let shouldShow = false;
        
        switch (status) {
            case 'all':
                shouldShow = true;
                break;
            case 'pending':
                shouldShow = claimStatus === 'pending';
                break;
            case 'approved':
                shouldShow = claimStatus === 'approved';
                break;
            case 'rejected':
                shouldShow = claimStatus === 'rejected';
                break;
        }
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Initialize the application when the page loads
window.addEventListener('load', init); 