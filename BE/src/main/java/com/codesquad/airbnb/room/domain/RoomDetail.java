package com.codesquad.airbnb.room.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RoomDetail {

    private final Long roomId;

    private final String roomName;

    private final String country;

    private final double reviewScoresRating;

    private final Price price;

    private final List<String> medias;

    private final String badge;

    private final boolean available;
}
