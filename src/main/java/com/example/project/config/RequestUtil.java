package com.example.project.config;

import javax.servlet.http.HttpServletRequest;

public class RequestUtil {
    public static String getAuthorizationToken(String header){
        header.replace("Bearer ", "");
        if (header == null || !header.startsWith("Bearer ")) {
            throw new IllegalArgumentException("Invalid authorization header");
        }
        // Remove Bearer from string
        String[] parts = header.split(" ");
        if (parts.length != 2) {
            throw new IllegalArgumentException("Invalid authorization header");
        }
        // Get token
        return parts[1];
    }
    public static String getAuthorizationToken(HttpServletRequest request) {
        return getAuthorizationToken(request.getHeader("Authorization"));
    }
}
