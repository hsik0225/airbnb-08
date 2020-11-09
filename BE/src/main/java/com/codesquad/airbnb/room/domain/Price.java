package com.codesquad.airbnb.room.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Price {

    private final int originPrice;

    private final int salesPrice;

    private final int totalPrice;
}
