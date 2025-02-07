import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

# Define confusion matrix data for the models
confusion_matrices = {
    "Skin Type Classification": [[85, 5, 3, 2], [4, 80, 6, 3], [2, 5, 90, 3], [3, 4, 2, 88]],
    "Acne Detection": [[228, 1], [11, 99]],
    "Dark Circle Detection": [[190, 10], [15, 85]],
    "Pigmentation Detection": [[180, 8], [12, 100]]
}

# Titles for the confusion matrices
titles = list(confusion_matrices.keys())

# Initialize the plot
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
axes = axes.ravel()  # Flatten the axes array for easy iteration

# Plot each confusion matrix
for idx, (model, matrix) in enumerate(confusion_matrices.items()):
    ax = axes[idx]
    matrix = np.array(matrix)
    sns.heatmap(matrix, annot=True, fmt='d', cmap="Blues", ax=ax, cbar=False)
    ax.set_title(model)
    ax.set_xlabel('Predicted')
    ax.set_ylabel('Actual')
    if matrix.shape[0] == 4:  # Skin type (multi-class)
        ax.set_xticklabels(['Dry', 'Oily', 'Normal', 'Combination'])
        ax.set_yticklabels(['Dry', 'Oily', 'Normal', 'Combination'])
    else:  # Binary models
        ax.set_xticklabels(['No Issue', 'Issue'])
        ax.set_yticklabels(['No Issue', 'Issue'])

# Adjust layout and show the plot
plt.tight_layout()
plt.show()
