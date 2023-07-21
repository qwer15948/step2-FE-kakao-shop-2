import React, { useEffect, useState } from 'react'
import OptionContainer from '../atoms/option/OptionContainer'
import OptionListBox from 'components/atoms/option/OptionListBox'
import OptionItem from 'components/molecules/OptionItem'
import SubmitButton from 'components/atoms/SubmitButton'
import TotalPrice from 'components/atoms/option/TotalPrice'
import OptionSelected from 'components/molecules/OptionSelected'
import strPrice from 'utils/price'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import addToCart from 'api/addToCart'
import SelectedItemBox from 'components/atoms/option/SelectedItemBox'

const DetailOption = (props) => {
  const initialList = props.options.map((item) => { 
    return {id:item.id, quantity: 0, optionName: item.optionName, price: item.price} 
  })

  const [selected, setSelected] = useState([])
  const [open, setOpen] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const loginState = useSelector((state) => state.login)

  const selectOption = (id) => {
    if (!loginState.islogin) {
      alert("로그인 해주세요")
      return
    }
    setOpen(prev => false)

    for (const item of selected) {
      if (item.id === id && item.quantity > 0) {
        console.log("이미 선택된 옵션입니다.")
        return
      }
    }
    // 추가일때 : initialList 에서 정보 찾아와서 넣기
    for (const item of initialList) {
      if (item.id === id) {
        setSelected(prev => [...prev, { ...item, quantity: 1 }])
        return
      }
    }
  }

  const changeQuantity = (id, newQuantity) => {
 
    if (newQuantity === 0 || Number.isNaN(newQuantity)) {return}
    if (newQuantity === -1) {
      newQuantity = 0
    }

    const newSelected = [...selected]

    // 변경일때 : selected 에서 찾아서 수량 바꾸기
    for (let i=0; i < selected.length; i++) {
      if (selected[i].id === id) {
        newSelected[i] = { ...selected[i], quantity: newQuantity }
        setSelected(prev => newSelected)
        return
      }
    }
  }

  useEffect( () => {
    console.log(selected)
    let p = 0;
    let q = 0;
    for (const item of selected) {
      if (item.quantity > 0) {
        p += item.quantity * item.price
        q += item.quantity
      }
    }
    setTotalPrice(prev => p)
    setTotalQuantity(prev => q)
  }, [selected])


  const submitHandler = () => {
    if (!loginState.islogin) {
      alert("로그인 해주세요")
      return
    }
    if (totalQuantity === 0) {
      alert("옵션을 선택해주세요")
      return
    }
    
    const newList = selected.map((item) => (
      {optionId: item.id, quantity: item.quantity}
    ))
    
    addToCart(newList)
    .then((res)=> {
      setSelected(prev => [])
      console.log("장바구니에 상품을 담았습니다")
    })
  }

  return (
    <OptionContainer>
      <OptionListBox open={open}>
        <OptionItem title={true} onClick={()=>setOpen(prev=>!prev)}> 
          <span className="flex"> 
            선택하기 
            {open 
              ? <RiArrowUpSLine className='w-5 h-5 ml-auto'/>
              : <RiArrowDownSLine className='w-5 h-5 ml-auto'/>
            }
          </span>
        </OptionItem>

        {open 
          ? props.options?.map((item)=>(
            <OptionItem 
              key={item.optionName}
              optionPrice={strPrice(item.price)}
              onClick={() => selectOption(item.id)}
            >
              {item.optionName}
            </OptionItem>
            ))
          : null
        } 
        
      </OptionListBox> 

      {selected.map((item) => {
        if (item.quantity > 0) {
          return (
            <SelectedItemBox>
              <OptionSelected 
                optionId={item.id}
                key={item.optionName} 
                optionName={item.optionName} 
                price={strPrice(item.quantity * item.price)}
                quantity={item.quantity}
                changeQuantity={changeQuantity}
                clear={() => changeQuantity(item.id, -1)}
              />
            </SelectedItemBox> 
          )} 
        })
      }

      <TotalPrice price={strPrice(totalPrice)} quantity={totalQuantity}/>

      <div className='grid grid-cols-2 gap-4'>
        <SubmitButton 
          color="white" 
          border="1px solid orange"
          onClick={submitHandler}
        >
          장바구니
        </SubmitButton>
        <SubmitButton>
          구매하기
        </SubmitButton>
      </div>
    </OptionContainer>
  )
}

export default DetailOption