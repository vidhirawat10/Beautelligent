import matplotlib.pyplot as plt

# Dummy data for training and validation accuracy and loss for all 4 models
epochs = list(range(1, 16))

# Skin type classification
skin_type_acc = [0.7, 0.81, 0.88, 0.89, 0.91, 0.92, 0.94, 0.94, 0.95, 0.95, 0.96, 0.95, 0.95, 0.95, 0.96]
skin_type_loss = [0.61, 0.38, 0.27, 0.21, 0.19, 0.17, 0.16, 0.15, 0.14, 0.12, 0.10, 0.11, 0.11, 0.12, 0.10]
plt.subplots_adjust(wspace=1.5)
# Acne detection
acne_acc = [0.65, 0.75, 0.82, 0.85, 0.88, 0.89, 0.91, 0.92, 0.92, 0.93, 0.94, 0.94, 0.94, 0.95, 0.95]
acne_loss = [0.68, 0.49, 0.34, 0.29, 0.25, 0.22, 0.19, 0.17, 0.15, 0.14, 0.13, 0.12, 0.12, 0.11, 0.10]
plt.subplots_adjust(wspace=1.5)
# Dark circle detection
dark_circle_acc = [0.60, 0.72, 0.80, 0.85, 0.87, 0.89, 0.91, 0.92, 0.93, 0.93, 0.94, 0.94, 0.95, 0.95, 0.96]
dark_circle_loss = [0.70, 0.52, 0.39, 0.31, 0.27, 0.24, 0.21, 0.19, 0.17, 0.16, 0.15, 0.14, 0.13, 0.12, 0.11]
plt.subplots_adjust(wspace=1.5)
# Pigmentation detection
pigmentation_acc = [0.62, 0.74, 0.81, 0.86, 0.89, 0.91, 0.92, 0.93, 0.94, 0.95, 0.95, 0.95, 0.96, 0.96, 0.97]
pigmentation_loss = [0.66, 0.48, 0.35, 0.28, 0.23, 0.20, 0.18, 0.16, 0.14, 0.13, 0.12, 0.11, 0.10, 0.10, 0.09]
plt.subplots_adjust(wspace=1.5)
# Plot training curves for all models
fig, axes = plt.subplots(4, 2, figsize=(15, 20))
fig.suptitle('Training Curves: Accuracy and Loss over Epochs', fontsize=16)

models = ['Skin Type Classification', 'Acne Detection', 'Dark Circle Detection', 'Pigmentation Detection']
data = [(skin_type_acc, skin_type_loss), (acne_acc, acne_loss), (dark_circle_acc, dark_circle_loss), (pigmentation_acc, pigmentation_loss)]

for i, ax in enumerate(axes):
    acc, loss = data[i]
    # Accuracy plot
    ax[0].plot(epochs, acc, marker='o', label='Training Accuracy', color='blue')
    ax[0].set_title(f'{models[i]} - Accuracy')
    ax[0].set_xlabel('Epochs')
    ax[0].set_ylabel('Accuracy')
    ax[0].legend()
    ax[0].grid(True)

    # Loss plot
    ax[1].plot(epochs, loss, marker='o', label='Training Loss', color='red')
    ax[1].set_title(f'{models[i]} - Loss')
    ax[1].set_xlabel('Epochs')
    ax[1].set_ylabel('Loss')
    ax[1].legend()
    ax[1].grid(True)

plt.tight_layout(rect=[0, 0, 1, 0.97]) # type: ignore
plt.show()
