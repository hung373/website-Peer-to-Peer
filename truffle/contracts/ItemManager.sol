//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;
import "./Item.sol";
import "./Ownable.sol";

contract ItemManager is Ownable {
    enum SupplyChainState {
        Created,
        Paid,
        Delivered
    }

    struct S_Item {
        uint itemId;
        Item item; // Đổi tên biến "Item" thành "itemContract" để tránh trùng tên với cấu trúc "Item"
        string name;
        uint price;
        address payable onwer;
        address payable buyer;
        SupplyChainState state;
    }

    mapping(uint => S_Item) public items;
    uint public itemCount;

    event ItemCreated(
        uint indexed itemId,
        string name,
        uint price,
        address onwer,
        SupplyChainState state,
        address _itemaddress
    );
    event ItemPaid(uint indexed itemId, address buyer, SupplyChainState state);
    event ItemDelivered(
        uint indexed itemId,
        address buyer,
        SupplyChainState state
    );

    modifier onlySeller(uint _itemId) {
        require(items[_itemId].onwer == msg.sender, "You are not the seller");
        _;
    }

    function createItem(string memory _name, uint _price) public {
        itemCount++;
        Item itemContract = new Item(this, _price, itemCount); // Đổi tên biến "Item" thành "itemContract" và tạo đối tượng "Item" mới

        items[itemCount] = S_Item({
            itemId: itemCount,
            item: itemContract,
            name: _name,
            price: _price,
            onwer: payable(msg.sender),
            buyer: payable(address(0)),
            state: SupplyChainState.Created
        });

        emit ItemCreated(
            itemCount,
            _name,
            _price,
            msg.sender,
            SupplyChainState.Created,
            address(itemContract)
        );
    }

    function purchaseItem(uint _itemId) public payable {
        S_Item storage item = items[_itemId];
        require(
            item.state == SupplyChainState.Created,
            "You are not allowed to purchase this item"
        );
        require(msg.value >= item.price, "Insufficient funds");

        item.state = SupplyChainState.Paid;
        item.buyer = payable(msg.sender);
        emit ItemPaid(_itemId, msg.sender, SupplyChainState.Paid);
    }

    function confirmDelivery(uint _itemId) public onlySeller(_itemId) {
        S_Item storage item = items[_itemId];
        require(
            item.state == SupplyChainState.Paid,
            "Item has not been purchased"
        );

        item.state = SupplyChainState.Delivered;
        item.onwer.transfer(item.price);
        item.onwer = item.buyer;
        item.buyer = payable(address(0));

        emit ItemDelivered(_itemId, item.buyer, SupplyChainState.Delivered);
    }
}
