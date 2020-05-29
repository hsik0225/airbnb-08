import React from "react";
import styled from "styled-components";
import GuestCountModal from "@GuestCountModal/GuestCountModal";
import CalendarModal from "@CalendarModal/CalendarModal";
import PriceModal from "@PriceModal/PriceModal";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { savePriceRange } from "@/actions/priceRangeAction";

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.div`
  border-radius: 20px;
  padding: 10px 15px;
  margin: 10px 5px;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.subColor};
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.mainColor};
  }
`;

const FilterButton = ({
  filterButtonClickHandler,
  dateVisible,
  guestVisible,
  priceVisible,
  modal,
}) => {
  const {
    guestCountReducer: { totalCount, babyCount },
    datePickerReducer: { startDate, endDate },
    priceRangeReducer: { priceRange, isSaved, isDeleted },
  } = useSelector((state) => state);

  const showResult = () => {
    switch (modal) {
      case "date":
        if (!startDate && !endDate) return "날짜";
        const start = moment(startDate).format("yyyy-MM-DD");
        const end = moment(endDate).format("yyyy-MM-DD");
        return start && !endDate ? `${start} - 체크아웃` : `${start} - ${end}`;
      case "guest":
        if (!totalCount && !babyCount) return "인원";
        return totalCount && !babyCount
          ? `게스트 ${totalCount}명`
          : `게스트 ${totalCount}명, 유아 ${babyCount}명`;
      case "price":
        if (!isSaved || isDeleted) return "요금";
        return `₩${priceRange[0]} - ₩${priceRange[1]}`;
      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const saveButtonClickHandler = () => {
    dispatch(savePriceRange());
    filterButtonClickHandler(modal);
  };

  return (
    <>
      <Wrapper>
        <Button
          onClick={() => {
            filterButtonClickHandler(modal);
          }}
        >
          {showResult()}
        </Button>
        <CalendarModal
          dateVisible={dateVisible}
          modal={modal}
          closeClickHandler={filterButtonClickHandler}
        />
        {guestVisible && (
          <GuestCountModal modal={modal} closeClickHandler={filterButtonClickHandler} />
        )}
        {priceVisible && <PriceModal modal={modal} closeClickHandler={saveButtonClickHandler} />}
      </Wrapper>
    </>
  );
};

export default FilterButton;
