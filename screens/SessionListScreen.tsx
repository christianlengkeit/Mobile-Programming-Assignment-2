import { FlatList, StyleSheet, Text, View } from "react-native";
import { sessions } from "../data/academicData";

export default function SessionListScreen() {
  return (
    <FlatList
      data={sessions}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.screenTitle}>Session List</Text>
          <Text style={styles.subtitle}>
            All course sessions for this semester
          </Text>
          <Text style={styles.sessionCount}>
            Total Sessions: {sessions.length}
          </Text>
        </View>
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Sessions Available</Text>
          <Text style={styles.emptyText}>
            There are currently no course sessions to display.
          </Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.sessionCard}>
          <Text style={styles.courseName}>{item.courseName}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Session:</Text>
            <Text style={styles.value}>Session {item.sessionNumber}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Topic:</Text>
            <Text style={styles.value}>{item.topic}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{item.date}</Text>
          </View>
        </View>
      )}
      contentContainerStyle={[
        styles.container,
        sessions.length === 0 && styles.emptyListContainer,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f6fa",
  },
  emptyListContainer: {
    flexGrow: 1,
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
    marginBottom: 8,
    color: "#6b7280",
  },
  sessionCount: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#374151",
  },
  sessionCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
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
    width: 80,
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: "#4b5563",
  },
  separator: {
    height: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },
  emptyText: {
    fontSize: 14,
    textAlign: "center",
    color: "#6b7280",
  },
});