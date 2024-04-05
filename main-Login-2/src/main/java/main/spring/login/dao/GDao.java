package main.spring.login.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import main.spring.login.Util.GUtil;

public class GDao {


    public static void saveUserData(String code, String nickName) {
        String sql = "INSERT INTO guser (code, nickName) VALUES (?, ?)";

        try (Connection conn = GUtil.getConnection();
             PreparedStatement statement = conn.prepareStatement(sql)) {

            statement.setString(1, code);
            statement.setString(2, nickName);

            statement.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

}
