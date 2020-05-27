import React, { useReducer } from "react";
import { useDatepicker } from "@datepicker-react/hooks";
import Month from "@CalendarModal/Calendar/Month";
import NavButton from "@CalendarModal/Calendar/NavButton";
import DatepickerContext from "@CalendarModal/Calendar/DatepickerContext";
import ModalButtons from "@/components/ModalButtons";
import { initialState, datePickerReducer } from "@/reducers/datePickerReducer";
import { dateChange } from "@/actions/actions";
import { useDispatch } from "react-redux";

const Datepicker = ({ closeClickHandler, modal }) => {
  const [state, reducerDispatch] = useReducer(datePickerReducer, initialState);
  const reduxDispatch = useDispatch();

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: (data) => {
      reducerDispatch({ type: "dateChange", payload: data });
      reduxDispatch(dateChange(data));
    },
    onFocusChange: (focusedInput) =>
      reducerDispatch({ type: "focusChange", payload: focusedInput }),
    minBookingDate: new Date(),
  });

  const deleteClickHandler = () => {
    reducerDispatch({ type: "dateDelete" });
    reduxDispatch({ type: "dateDelete" });
  };

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "17px",
          width: "700px",
          display: "flex",
          justifyContent: "space-between",
          zIndex: "3",
          margin: "0 30px 0 30px",
        }}
      >
        <NavButton onClick={goToPreviousMonths}>Previous</NavButton>
        <NavButton onClick={goToNextMonths}>Next</NavButton>
      </div>
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gridGap: "0 32px",
          height: "85%",
          margin: "0 30px 0 30px",
        }}
      >
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
      <ModalButtons
        deleteClickHandler={deleteClickHandler}
        closeClickHandler={closeClickHandler}
        modal={modal}
      />
    </DatepickerContext.Provider>
  );
};

export default Datepicker;