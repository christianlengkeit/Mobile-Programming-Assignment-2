import { SectionList, StyleSheet, Text, View } from "react-native";
import { weeklySchedule } from "../data/academicData";

export default function WeeklyScheduleScreen() {
  return (
    <SectionList
      sections={weeklySchedule}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.screenTitle}>Weekly Schedule</Text>
          <Text style={styles.subtitle}>Class schedule grouped by day</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.dayHeader}>
          <Text style={styles.dayHeaderText}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.scheduleCard}>
          <Text style={styles.courseName}>{item.courseName}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Room:</Text>
            <Text style={styles.value}>{item.room}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Time:</Text>
            <Text style={styles.value}>{item.time}</Text>
          </View>
        </View>
      )}
      contentContainerStyle={styles.container}
      stickySectionHeadersEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f6fa",
  },
  headerContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
    color: "#1f2937",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#6b7280",
  },
  dayHeader: {
    backgroundColor: "#1f2937",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  dayHeaderText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
  },
  scheduleCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    width: 70,
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: "#4b5563",
  },
});