import Order from '../models/orderModel.js'

//@desc Create New Order
//@route POST /api/orders
//@access private
const addOrderItems = async (req, res)=>{
  const { 
    orderItems,
     shippingAddress, 
     paymentMethod, 
     itemPrice, 
     taxPrice, 
     shippingPrice, 
     totalPrice } = req.body; 

    if(orderItems && orderItems.length === 0){
      res.status(400).json('no order items');
    } else{
      const order = new Order({
        orderItems: orderItems.map((x)=> ({
          ...x,
          product: x._id,
          _id: undefined
        })),
        user: req.user._id,
        shippingAddress, 
        paymentMethod, 
        itemPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice
      });

      const createdOrder = await order.save();

      res.status(201).json(createdOrder);

    }
}


//@desc Get Logged in user orders
//@route GET /api/orders/myorders
//@access private
const getMyOrders = async (req, res)=>{
  const orders = await Order.find({ user: req.user._id}); //cookie
  res.status(200).json(orders);
}


//@desc get order by ID
//@route GET /api/orders/:id
//@access private
const getOrderById = async (req, res)=>{
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if(order){
    res.status(200).json(order)
  } else{
    res.status(404).json('Order not found');
  }
}


//@desc update order to paid
//@route PUT /api/orders/:id/pay
//@access private
const updateOrderToPaid = async (req, res)=>{
  const order = await Order.findById(req.params.id);

  if(order){
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }
  } else{
    res.status(404).json({message: 'Order not Found'})
  }

  const updateOrder = await order.save();

  res.status(200).json(updateOrder);
}


//@desc update to delivered
//@route PUT /api/orders/:id/deliver
//@access private/Admin
const updateOrderToDelivered = async (req, res)=>{
  const order = await Order.findById(req.params.id);

  if( order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
    
  }

  else{
    res.status(404).json({message: error.message});
  }
}


//@desc get All Orders
//@route GET /api/orders
//@access private/Admin
const getOrders = async (req, res)=>{
  const orders = await Order.find({}).populate('user','id name');
  res.status(200).json(orders);
}


export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders
}