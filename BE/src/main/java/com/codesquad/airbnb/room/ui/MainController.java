package com.codesquad.airbnb.room.ui;

import com.codesquad.airbnb.reservation.domain.Guest;
import com.codesquad.airbnb.reservation.domain.ReservationDate;
import com.codesquad.airbnb.room.domain.Budget;
import com.codesquad.airbnb.room.domain.Main;
import com.codesquad.airbnb.room.domain.Statistics;
import com.codesquad.airbnb.manager.ManagerDAO;
import com.codesquad.airbnb.room.infra.RoomDAO;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class MainController {

    private final ManagerDAO managerDAO;

    private final RoomDAO roomDAO;

    @GetMapping("")
    public Main showMain(ReservationDate reservationDate,
                         @Valid Guest guest,
                         @Valid Budget budget) {

        reservationDate.validateReservationDate();
        return roomDAO.main(managerDAO, reservationDate, guest, budget);
    }

    @GetMapping("/budget")
    public Statistics showPriceStatistics(@Valid ReservationDate reservationDate) {
        return roomDAO.showStatistics(reservationDate);
    }
}
