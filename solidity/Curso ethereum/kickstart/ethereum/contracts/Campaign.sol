pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public{ //permite usuário criar uma niva instância de uma campanha
    address newCampaign = new Campaign(minimum, msg.sender);
    deployedCampaigns.push(newCampaign);

    }

    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}

contract Campaign{

    struct Request {  //tipos de solicitações
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {  //função construtora do contrato
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {   //função para contribuir
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }
    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);  //ter certeza que é um doador
        require(!request.approvals[msg.sender]); //ver se ja votou

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }  

    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount /2));
        require(!request.complete);

    request.recipient.transfer(request.value);
        request.complete = true;

    }
}